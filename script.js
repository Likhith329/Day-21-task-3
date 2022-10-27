let btnsdata=document.querySelectorAll(".btn.btn-warning")
let solutiondata=document.querySelector(".solution")
btnsdata.forEach(btndata=>{
    btndata.addEventListener("click",()=>{
        let inpdata=document.querySelector("input[type='text']").value
        getData(btndata.value,inpdata)
    })
})

async function getData(operation,inputdata){
    inputdata=encodeURIComponent(inputdata)

    let fetcheddata= await fetch("https://newton.vercel.app/api/v2/"+operation+"/"+inputdata)
    let data= await fetcheddata.json()
    let result=document.querySelector(".solution")
    result.innerHTML="Answer is "+data.result
}


function show(className){
    let displaydata=document.querySelector("."+className)
    displaydata.style.display="block"
}
function hide(className){
    let displaydata=document.querySelector("."+className)
    displaydata.style.display="none"
}

async function tangent(){
    let xval=document.querySelector(".bc1").value
    let eqval=document.querySelector(".eq1").value
    let inpdata=encodeURIComponent(xval+"|"+eqval)
    let fetcheddata= await fetch("https://newton.vercel.app/api/v2/tangent/"+inpdata)
    let data= await fetcheddata.json()
    let result=document.querySelector(".solution")
    result.innerHTML="Answer is "+data.result
}


async function Area(){
    let x1val=document.querySelector(".bcon1").value
    let x2val=document.querySelector(".bcon2").value
    let eqval=document.querySelector(".eq2").value
    let inpdata=encodeURIComponent(x1val+":"+x2val+"|"+eqval)
    let fetcheddata= await fetch("https://newton.vercel.app/api/v2/area/"+inpdata)
    let data= await fetcheddata.json()
    let result=document.querySelector(".solution")
    result.innerHTML="Answer is "+data.result
}


async function Log(){
    let baseval=document.querySelector(".base").value
    let argval=document.querySelector(".argument").value
    let inpdata=encodeURIComponent(baseval+"|"+argval)
    let fetcheddata= await fetch("https://newton.vercel.app/api/v2/log/"+inpdata)
    let data= await fetcheddata.json()
    let result=document.querySelector(".solution")
    result.innerHTML="Answer is "+data.result+` ( log<sub>${baseval}</sub>${argval} )`
}

