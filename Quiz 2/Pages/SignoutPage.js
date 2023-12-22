function SignOut() {
    return`<form id="login">
    <h1>Click Ok to signedOut</h1>

    <div class="set" id="signButton">
    <button >Ok</button>

    </div>
</form>`
}

import {homePage,innerHomePage,loginBefore} from "./index.js"

function innerSignOut() {

    let signOut=document.querySelectorAll("#signButton button")

    signOut[0].addEventListener("click",()=>{
        text()
    async function text() {
        try {
            const res = await fetch("http://localhost:3000/api/auth/signout", {
                method: "GET",
                credentials: "include", 
            });
            const data = await res.json();
            console.log(data);
            console.log("signout");
            // window.location.href = "http://127.0.0.1:5500/Home.html";
            main.innerHTML=homePage();
            innerHomePage();
            loginBefore();

        } catch (error) {
            console.log(error);
        }
    }
})
}

export {SignOut,innerSignOut}