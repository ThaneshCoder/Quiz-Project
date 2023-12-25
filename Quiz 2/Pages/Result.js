
import {selectQuiz} from "./QuizPage.js";

function Result() {
    return `
    <div id="allQuiz">
    <div id="myQuiz">
    </div>
</div>
   `
}

function quizResults(userid) {

    fetch(`http://localhost:3000/api/result/getallresults/${userid}`, {
        method: "GET",
        cache: "default",
        credentials: "include",
    }).then((response)=>{
        console.log(response);
        return response.json();
    }).then((res)=>{
        
        if(res.length>0){
            let myQuiz=document.querySelector("#myQuiz")
            myQuiz.innerHTML=CreateDiv(res)
            myQuiz.style.textAlign="none"
        }else{
            alert("There are no Quiz to view")
            alert("Please Attend Quiz")
        }

    })
}

function CreateDiv(res) {
    return `
    <div>Quiz ID : ${res[0].quizId}</div>
    <div>Quiz Title : ${res[0].quizTitle}</div>
    <div>User Name : ${res[0].userName}</div>
    <div>Question Attended : ${res[0].totalQuestions}</div>
    <div>Correct Answer : ${res[0].correctAnswers}</div>
    `
}

export {Result,quizResults}