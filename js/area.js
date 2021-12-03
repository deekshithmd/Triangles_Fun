var side1=document.querySelector("first")
var side2=document.querySelector("second")
var side3=document.querySelector("third")
var button=document.querySelector("#calculate-area")
var output=document.querySelector(".output")
console.log(side1.value)
    console.log(side2.value)
    console.log(side3.value)

function calculateArea(e){
    e.preventDefault();

    var a=Number(side1.value)
    var b=Number(side2.value)
    var c=Number(side3.value)

    console.log(a)
    console.log(b)
    console.log(b)

    if(a+b>c && b+c>a && a+c>b){
        var s=(a+b+c)/2
        var area=Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(4)
        console.log(area)
    }
    console.log("Done")
}

button.addEventListener("submit",calculateArea)