
function homePage(){
    return `  <div id="corosal" >
                <div id="corosalImage">
                    <img src="" alt="" height="100%" width="100%">
                </div>
                <div id="dash">
                </div>  
        </div>
    
    
    <div id="feature">
        <h1>A Trivia Cloud Platform for The Digital World!</h1>
    
        <div class="featureType">
            <div class="featureImage">
                <img src="./Images/Home/Intitutive.jpg" alt="" height="100%" width="100%">
            </div>
            <div class="featureContent" >
                <h2>Intuitive Quiz Builder</h2>
            Advanced quiz builder that includes SETTINGS
            and QUESTIONS sections. Settings control WHAT,
            WHEN, FOR WHOM, and HOW the quiz will function.
            The questions section allows the creation of various
            question types with images, GIFs, and videos
            </div>
        </div>
    
        <div class="featureType">
            <div class="featureContent" >
                <h2>Various Question Types</h2>
                Create Multiple choice, Open-ended, True/False,
                Picture based answers, Poll, and Drawing questions.
                Break trivia into Rounds and embed Google Slides
            </div>
            <div class="featureImage">
                <img src="./Images/Home/Types-Of-Questions.webp" alt="" height="100%" width="100%">
            </div>
        </div>
       
        <div class="featureType">
            <div class="featureImage">
                <img src="./Images/Home/Multiplayer-quiz.jpg" alt="" height="100%" width="100%">
            </div>
            <div class="featureContent" >
                <h2>Three Players Modes</h2>
                Multiplayer mode (MPM) - engages many
                participants in a live quiz event
    
                Team Trivia mode (TTM) - allows organizing
                participants into teams. The winning team is
                the one with the highest score and the fastest
                time to answer
    
                Single-player mode (SPM) - allows participants
                to play a quiz individually that is available
                for a certain period of time
            </div>
        </div>
       
        <div class="featureType">
            <div class="featureContent" >
                <h2>Support all Participants/Event</h2>
                The platform supports up to 100,000 concurrent
                players per quiz. myQuiz is running in a Microsoft
                Azure cloud environment which allows
                autoscaling to meet changing demands
            </div>
            <div class="featureImage">
                <img src="./Images/Home/quizc.png" alt="" height="100%" width="100%">
            </div>
        </div>
    </div>`
}

var corosalInterval;


function innerHomePage() {
    let dash=document.querySelector("#dash")
    let img=document.querySelector("#corosalImage")

let arr=[
"https://www.umassglobal.edu/-/media/images/17-blog-images/collegis-blog-images/quiz_learning-styles_blog-banner.jpg",
"https://i.ytimg.com/vi/f0A4ArjPbp0/maxresdefault.jpg",
"https://www.skillsyouneed.com/images/rhubarb/critical-thinking.jpg",
"https://garysking.files.wordpress.com/2015/07/questioning-blog.jpg",
"https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/ed6cozjawexldjs7yedn",
"https://www.quizyourfriends.com/wp-content/uploads/2020/12/MakeAQuiz-Orange.jpg",
]

let CB=[];
    arr.forEach((ele,index) => {
        CB[index]=document.createElement("button")
        dash.appendChild(CB[index])
    });
    CB=document.querySelectorAll("#dash button")

let no=0;

function corosal() {
    if(no==arr.length||no==0){no=0;}
    img.innerHTML=` <img src="${arr[no]}" alt="" height="100%" width="100%">`
    CB.forEach((element) => {element.style.backgroundColor="white"});
    CB[no].style.backgroundColor="black"
    no++;
}

CB.forEach((e,index) => {
    e.addEventListener("click",()=>{
        no=index;
        corosal(index)
    })
});
    corosalInterval=setInterval(()=>{
        corosal()
    },2000)
}

export {homePage,innerHomePage,corosalInterval}