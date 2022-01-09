const quizForm=document.querySelector(".quiz-form")
const button=document.querySelector(".submit")
const output=document.querySelector(".output")

const correctAnswers=[
    "90",
    "right",
    "one",
    "12, 16, 20",
    "100"
]

const checkScore = () =>{
    let score=0
    let i=0
    const formResults = new FormData(quizForm);
    for(let ans of formResults.values()){
        if(ans===correctAnswers[i])
            score+=1
        i+=1
    }
    output.innerText=`Your score is ${score}`
}

button.addEventListener("click",checkScore)