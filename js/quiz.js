var quizForm=document.querySelector(".quiz-form")
var button=document.querySelector(".submit")
var output=document.querySelector(".output")

const correctAnswers=[
    "90",
    "right",
    "one",
    "12, 16, 20",
    "100"
]

function checkScore(){
    var score=0
    var i=0
    const formResults = new FormData(quizForm);
    for(var ans of formResults.values()){
        if(ans==correctAnswers[i])
            score=score+1
        i=i+1
    }
    output.innerText="Your score is "+score
}

button.addEventListener("click",checkScore)