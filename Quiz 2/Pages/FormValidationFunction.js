

let FN = false;
let LN = false;
let MN = false;
let Eid = false;
let PW = false;
let CPW = false;
let UN = false;
let LPW = false;


function firstName(a) {
    if(a.length>1){
    for (let i = 1; i < a.length; i++) {
        let c=a.charCodeAt(i)
        let first=a.charCodeAt(0)

        if(65<first && first<=90){

            if(96<c && c<123){

            }else{
                return "User Name must contain small letter"
            }

        }else{
            return "User name First Letter must be capital"
        }
    }
    FN = true;
    return ""
}else{
    return "User name must contain atleat 2 letter"
}
}

function lastName(a) {
    if(a.length!=0){
    }else{
        return "The lastName should not be empty"
    }
    if(a.length!=1){
        return "Last name should contains only 1 letter"
    }
    LN=true;
    return ""
}

function mobileNo(a) {
    if(a.length>0){
        let b=(Number)(a)

    if(a.length==10 && typeof(b)=='number'){
        MN=true;
        return ""
    } 
    return "Phone number should contains 10 numbers"
}else{
    return "Enter your phone number"
}
}

function mailId(a) {
    if(a.length!=0){

    if(a.endsWith(".com") && a.includes("@")){
        Eid=true;
        UN = true;
        return ""
    }
    return "Invalid  Mail Id"
}else{
    return "The Email Id should not be empty"
}
}

let original="";
function pass(a) {
    if(a.length!=0){
        let cc=0;
        let lc=0;
        let nc=0;
        let sc=0;
        for (let i = 0; i < a.length; i++) {
            let c=a.charCodeAt(i)
            if((65<=c && c<=90)){
                cc++;
            }else if ((97<=c && c<=122)) {
                lc++;
                }else if((48<=c && c<=57)) {
                    nc++;
                    }else{
                        sc++;
                        }  
        }
        if (a.length<=8) {
            return "Password must contain min 8 character"
        }else if(cc<1){
            return "Password must contain min 1 uppercase"
        }else if(lc<1){
            return "Password must contain min 1 lowercase"
        }else if(nc<1){
            return "Password must contain min 1 number"
        }else if(sc<1){
            return "Password must contain min 1 Symbol"
        }else{
            PW=true;
            LPW=true;
            original=a;
            return ""
        }
    }else{
        return "The Password should not be empty"
    }
}

function check(a) {
    if(a.length!=0){
    if(original==a){
        CPW=true;
        return ""
    }
    return "Incorrect Password"
}else{
    return "The Password should not be empty"
}
}
export  {FN,LN,MN,Eid,PW,CPW,UN,LPW}  
export  {firstName,lastName,mobileNo,pass,mailId,check}  