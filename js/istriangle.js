var angles=document.querySelectorAll(".input-angle")
var check=document.querySelector(".check")
var output=document.querySelector(".output")

function checkTriangle(){
    var angle1=Number(angles[0].value)
    var angle2=Number(angles[1].value)
    var angle3=Number(angles[2].value)

    if((angle1+angle2+angle3)==180){
        output.innerText="Yes...these angles form Triangle"
    }
    else{
        output.innerText="No...these angles does not form Triangle"
    }
}

check.addEventListener("click",checkTriangle)