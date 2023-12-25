
function Quiz() {
    return ` 
    <div id="allQuiz">

    </div> `
}

function quizFetch (element){
    return `
      <h3>${element.title}</h3> 
       Quiz id : ${element.id}
    ` 
}

function selectQuiz (){
    return `
    <a href="" role="button" class="next"><</a>
    <a href="" id="myQuiz" role="button"></a>
    <a href="" role="button" class="next">></a> ` 
}

import {homePage,innerHomePage} from "./index.js"

function innerQuiz() {

    fetch(`http://localhost:3000/api/quiz/allquizzes`, {
        method: "GET",
        cache: "default",
        credentials: "include",
    }).then((response)=>{
        console.log(response);
        return response.json();
    }).then((quiz)=>{

        let allQuiz=document.querySelector("#allQuiz")
        allQuiz.innerHTML=selectQuiz();

        let myQuiz=document.querySelector("#myQuiz")
        let quizArray= quiz.map((element) => {
            return quizFetch(element);
        });

        myQuiz.innerHTML=quizArray[0]
        
        let next=document.querySelectorAll(".next")
        let  quizId=0;

        next[0].addEventListener("click",(event)=>{
            event.preventDefault()
            quizId--;
            if ( 0<=quizId) {
                myQuiz.innerHTML=quizArray[quizId]
            }else{quizId=0;}
        })
        next[1].addEventListener("click",(event)=>{
            event.preventDefault()
            quizId++;
            if ( quizId<quizArray.length) {
                myQuiz.innerHTML=quizArray[quizId]
            }else{quizId=quizArray.length-1;}
        })
        myQuiz.addEventListener("click",(event)=>{
            event.preventDefault()
            quizStart(quizId+1)
        })
    })
}

function AI(que,classIndex,index) {
    let critical=que.choice
    if(critical.includes("<")){
        critical=critical.replace("<","&lt")
        critical=critical.replace(">","&gt")
    }

    return `<div class="option"><input id="s${classIndex}a${index}" type="radio" name="s${classIndex}" value="${index}"><label for="s${classIndex}a${index}">${critical}</label></div>`
}

async function quizStart(quizId) {
    try {
        const ques = await fetch(`http://localhost:3000/api/question/allquestions/${quizId}`, {
            method: "GET",
            cache: "default",
            credentials: "include", 
        });
        
        const quesData = await ques.json();
    
        console.log(quesData);
        let allQuestions=quesData.questions

        let allQuiz=document.querySelector("#allQuiz")
        allQuiz.innerHTML=""
        allQuiz.style.backgroundColor="rgba(243, 243, 243, 0.8)"

        let idQuiz=document.createElement("div")
        allQuiz.appendChild(idQuiz)
        idQuiz.classList.add("idQuiz")

        let h1=document.createElement("h1")
        idQuiz.appendChild(h1)
        h1.innerText=quesData.title
        h1.style.textAlign="center"

        allQuestions.forEach((element,classIndex) => {
          let ch=element.choices
          let questTotal=document.createElement("div")
          idQuiz.appendChild(questTotal)
          questTotal.classList.add("quiz")
          let h3=document.createElement("h3")
          questTotal.appendChild(h3)

          h3.innerText=`${classIndex+1}. ${element.question}`
            ch.forEach((que,index) => {
                let option=document.createElement("div")
                questTotal.appendChild(option)
                option.innerHTML=AI(que,classIndex,index)
                console.log(AI(que,classIndex,index));
                
            });     
        })

        let final=document.createElement("button")

        idQuiz.appendChild(final)
        final.innerText="Click here to Submit your Answers"
        final.classList.add("submitQuiz")

        final.addEventListener("click",()=>{

            let input=document.querySelectorAll(`.option input`)
            console.log(input);
            let result=[];
            let resCount=0;

            input.forEach((ans) => {
                if (ans.checked) {
                    result[resCount]=ans.value;
                    resCount++;
                }
            });
            console.log(result);

            let dataObj=[];

            result.forEach((element,index) => {
                dataObj[index]={"questionId":1,"userChoice":element,"quizId":2}
            });

            let jsonObj=JSON.stringify(dataObj)

            console.log(jsonObj);

            let baseURL="http://localhost:3000/api/answer"
    
            fetch(baseURL, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonObj,
            })
            .then((response) => {
                console.log(response);
                if(response.ok){
                    console.log("The answers are saved Sucessfully");
                    return response.json();
                }else{
                    console.log("The answers are not saved");
                }
            }).then((res)=>{
                console.log(res);
                fetch(`http://localhost:3000/api/result/${quizId}`, {
                    method: "POST",
                    cache: "default",
                    credentials: "include",
                }).then((response)=>{
                    console.log(response);
                    if(response.ok){
                        console.log("The answers are added Sucessfully");
                        return response.json();
                    }else{
                        console.log("The answers are not added Sucessfully");
                    }
                }).then(()=>{
                    main.innerHTML=homePage();
                    innerHomePage();
                })
            })
            .catch((error) => {
                console.log("Fetch error:", error);
            });

        })
    } catch (error){
        console.log(error);
    }
}


export {Quiz,innerQuiz,selectQuiz}