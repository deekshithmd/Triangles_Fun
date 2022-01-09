const sides=document.querySelectorAll(".input-side")
const check=document.querySelector(".calculate")
const output=document.querySelector(".output")

const calculateHypotenuse = () =>{
    const base=Number(sides[0].value)
    const height=Number(sides[1].value)

    const hypotenuse = Math.sqrt((base*base)+(height*height)).toFixed(2)

    if(hypotenuse == undefined){
        output.innerText=`Please enter both parameters`
    }
    else{
        output.innerText=`Hypotenuse of the given Triangle is ${hypotenuse}`
    }

}

check.addEventListener("click",calculateHypotenuse)