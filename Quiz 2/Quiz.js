
let shop=document.querySelectorAll("#navButton button")
let userID=document.querySelector("#userID")

function loginBefore() {
    shop[3].innerHTML="Sign In"
    userID.classList.remove("user")
    user.innerText="";
}

function loginAfter(userData) {
    shop[3].innerHTML="Sign Out";
    shop[4].remove()
    userID.classList.add("user")
    let user=document.querySelector(".user")
    user.innerText=`Welcome ${userData.username}`;
}

let main=document.querySelector("#main")

// ........................Home Page................................................

function homeStart() {
    main.innerHTML=homePage();
    innerHomePage();
}
document.addEventListener("DOMContentLoaded",(event)=>{homeStart()})
shop[0].addEventListener("click",()=>{homeStart()})

// ......................Quiz Page........................................

shop[1].addEventListener("click",()=>{
    if (userID.classList.contains("user")) {
        clearInterval(corosalInterval)
        main.innerHTML=Quiz()
        innerQuiz()

    }else{
        clearInterval(corosalInterval)
        main.innerHTML=loginInPage()
        innerLoginPage(Quiz,innerQuiz)
}
})

// ......................SignIn Page........................................

shop[3].addEventListener("click",()=>{
    if (userID.classList.contains("user")) {
        console.log("About to sign out");
        main.innerHTML=SignOut()    
        innerSignOut()
    }else{
        clearInterval(corosalInterval)
        console.log("About to signing In");
        main.innerHTML=loginInPage()
        innerLoginPage()
    }
})

// ......................Signup Page........................................

shop[4].addEventListener("click",()=>{
    clearInterval(corosalInterval)
    main.innerHTML=signPage()
    innerSignuP()
})

// ......................Result Page........................................

shop[2].addEventListener("click",()=>{
    if (userID.classList.contains("user")) {
        clearInterval(corosalInterval)
        main.innerHTML=Result()    
        quizResults(userData.id)
   
    }else{
        clearInterval(corosalInterval)
        main.innerHTML=loginInPage()
        innerLoginPage(Result,quizResults)

    }
})

import {homePage,innerHomePage,corosalInterval,loginInPage,innerLoginPage,signPage,innerSignuP,SignOut,innerSignOut,Quiz,innerQuiz,userData,Result,quizResults} from "./Pages/index.js";

export {loginBefore,homePage,innerHomePage,loginAfter}