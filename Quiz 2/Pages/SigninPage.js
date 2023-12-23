function loginInPage(){
    return ` <form id="login">
    <h1>Login</h1>
    <div class="set">
        <Label>User Name</Label>
        <input class="data" type="text" placeholder="User Name">
    </div>
    <div class="result"></div>
    
    <div class="set">
        <Label>Password</Label>
        <input class="data" type="password" placeholder="Password Name">
    </div>
    <div class="result"></div>

    <div class="set" id="signButton">
        <button type="reset">Reset</button>
        <button type="submit">Login</button>
    </div>
</form>`
}

import {pass,mailId} from "./FormValidationFunction.js"

import {homePage,innerHomePage} from "./index.js"

import {loginAfter} from "./index.js"

var userData={};

function innerLoginPage(Qhtml,Qfunction) {
    let logindata=document.querySelectorAll(".data")
    let loginresult=document.querySelectorAll(".result")
    let loginbutton=document.querySelectorAll("#signButton button")

    loginbutton[1].addEventListener("click",(eve)=>{

        eve.preventDefault()
        let Luser=logindata[0].value
        let Lpassword=logindata[1].value
    
        loginresult[0].innerHTML= mailId(Luser)
        loginresult[1].innerHTML=pass(Lpassword)

        if(UN && LPW){
                console.log("hi");
                let dataObj={
                    email:Luser,
                    password:Lpassword,
                  }

                let jsonObj=JSON.stringify(dataObj)
                let baseURL="http://localhost:3000/api/auth/signin"

                fetch(baseURL,{
                    method:"POST",
                    credentials:"include",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:jsonObj,

                }).then((e)=>{
                    console.log(e);
                    console.log(e.ok);
                    if (e.ok) {
                    return e.json();
                    }else{
                        alert("Wrong userId or Password")
                    }

                }).then((res)=>{
                    console.log(res);
                    userData.id=res.id;
                    userData.username=res.username;
                    console.log(userData);
                    
                    main.innerHTML=Qhtml();
                    Qfunction(userData.id);
                    loginAfter(userData);
  

                }).catch(()=>{
                    alert("Please enter correct userId and Password")
                })
        }
    // }
    })
    
    logindata[0].addEventListener("keydown",()=>{loginresult[0].innerHTML = mailId(logindata[0].value)})
    logindata[1].addEventListener("keydown",()=>{loginresult[1].innerHTML = pass(logindata[1].value)})
}

export {loginInPage,innerLoginPage,userData}