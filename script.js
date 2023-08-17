let display=document.querySelector(".display")
let deleteBtn=document.querySelector(".deleteBtn")
let calculation=document.querySelector(".calculation")
let backBtn=document.querySelector(".backBtn")
let btn=document.querySelectorAll(".btn")


let convertButton=Array.from(btn)
convertButton.map((item,index)=>{
    
    item.addEventListener("click",function(){  
        display.value+=item.value 
    })
})

calculation.addEventListener("click",function(){
    let a=display.value
    let b=eval(a)
    display.value=b
})

deleteBtn.addEventListener("click",function(){
    display.value=""
})


backBtn.addEventListener("click",function(){
    display.value = display.value.slice(0, -1)
    
})





