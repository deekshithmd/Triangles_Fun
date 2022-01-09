const angles=document.querySelectorAll(".input-angle")
const check=document.querySelector(".check")
const output=document.querySelector(".output")

const checkTriangle = () =>{
    const angle1=Number(angles[0].value)
    const angle2=Number(angles[1].value)
    const angle3=Number(angles[2].value)

    if((angle1+angle2+angle3)===180){
        output.innerText=`Yes...these angles form Triangle`
    }
    else{
        output.innerText=`No...these angles does not form Triangle`
    }
}

check.addEventListener("click",checkTriangle)