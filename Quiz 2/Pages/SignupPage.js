function signPage(){
    return `  <form id="signup" method="get" action>
    <h1>Sign Up</h1>
    <div class="set">
        <Label>First Name</Label>
        <input class="data" type="text" placeholder="First Name" >
    </div>
    <div class="result"></div>
    
    <div class="set">
        <Label>Last Name</Label>
        <input class="data" type="text" placeholder="Last Name">
    </div>
    <div class="result"></div>

    <div class="set">
        <Label>Phone Number</Label>
        <input class="data" type="number" placeholder="Phone Number">
    </div>
    <div class="result"></div>

    <div class="set">
        <Label>E mail</Label>
        <input class="data" type="email" placeholder="E mail">
    </div>
    <div class="result"></div>

    <div class="set">
        <Label>Password</Label>
        <input class="data" type="password" placeholder="Password">
    </div>
    <div class="result"></div>

    <div class="set">
        <Label>Confirm Password</Label>
        <input class="data" type="password" placeholder="Confirm Password">
    </div>
    <div class="result"></div>

    <div class="set" id="signButton">
        <button type="reset">Reset</button>
        <button type="submit">Sign Up</button>
    </div>
    <div >Already have an Account?<a href="">Log in</a></div>
    or
    <button id="google">Sign Up with Google</button>
    <div id="terms">By signing up an account I accept company's <a href="">Terms and Conditions</a></div>
</form> `
}

    import {FN,LN,MN,Eid,PW,CPW} from "./FormValidationFunction.js"

    import {firstName,lastName,mobileNo,pass,mailId,check} from "./FormValidationFunction.js"
    
    import {loginInPage,innerLoginPage} from "./index.js";

function innerSignuP() {
    let data=document.querySelectorAll(".data")
    let button=document.querySelectorAll("#signButton button")
    let result=document.querySelectorAll(".result")
    let form=document.querySelectorAll("#content")

  
    button[1].addEventListener("click",(eve)=>{
        eve.preventDefault()
        result[0].innerHTML = firstName(data[0].value)
        result[1].innerHTML = lastName(data[1].value)
        result[2].innerHTML = mobileNo(data[2].value)
        result[3].innerHTML = mailId(data[3].value)
        result[4].innerHTML = pass(data[4].value)
        result[5].innerHTML = check(data[5].value)
    
        if(FN && LN && MN && Eid && PW && CPW){
  
            let dataObj={
                username: data[0].value,
                email: data[3].value,
                password: data[5].value,
              }
            let jsonObj=JSON.stringify(dataObj)
            let baseURL="http://localhost:3000/api"
    
            fetch(`${baseURL}/auth/signup`,{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body:jsonObj,
            }).then((e)=>{
                if (e.ok) {
                    return e.json()
                    }else{
                        alert("Error in Connection")
                    }
            }).then((res)=>{
                alert(res.message)
                main.innerHTML=loginInPage()
                innerLoginPage()
            })
        }
    })   
    data[0].addEventListener("keydown",()=>{result[0].innerHTML = firstName(data[0].value)})
    data[1].addEventListener("keydown",()=>{result[1].innerHTML = lastName(data[1].value)})
    data[2].addEventListener("keydown",()=>{result[2].innerHTML = mobileNo(data[2].value)})
    data[3].addEventListener("keydown",()=>{result[3].innerHTML = mailId(data[3].value)})
    data[4].addEventListener("keydown",()=>{result[4].innerHTML = pass(data[4].value)})
    data[5].addEventListener("keydown",()=>{result[5].innerHTML = check(data[5].value)})
}


export {signPage,innerSignuP}