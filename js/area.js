const sides=document.querySelectorAll(".input-side")
const button=document.querySelector(".calculate")
const output=document.querySelector(".output")

const calculateArea = ()=>{

    //console.log(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value))

    const a=Number(sides[0].value)
    const b=Number(sides[1].value)
    const c=Number(sides[2].value)

    if(a+b>c && b+c>a && a+c>b){
        const s=(a+b+c)/2
        var area=Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2)
        //console.log(area)
    }
    //console.log("Done")
    if(area==undefined)
        output.innerText=`Please enter all 3 sides in correct format`
    else
        output.innerText=`Area of triangle is ${area} units`
}

button.addEventListener("click",calculateArea)