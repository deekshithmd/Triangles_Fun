var sides=document.querySelectorAll(".input-side")
var check=document.querySelector(".calculate")
var output=document.querySelector(".output")

function calculateHypotenuse(){
    var base=Number(sides[0].value)
    var height=Number(sides[1].value)

    var hypotenuse = Math.sqrt((base*base)+(height*height)).toFixed(2)

    if(hypotenuse == undefined){
        output.innerText="Please enter both parameters"
    }
    else{
        output.innerText="Hypotenuse of the given Triangle is "+hypotenuse
    }

}

check.addEventListener("click",calculateHypotenuse)