let inp=document.querySelector("input[type=range]");
let views=document.querySelector(".views");
let price=document.querySelector(".price");

let btn=document.querySelector(".btn-mon");

let input=document.getElementById('prog');
let inputbefore=window.getComputedStyle(input,"::before").getPropertyValue("width");
console.log(inputbefore);

input.addEventListener('input',function(){
    console.log(input.value);
   // let wid=window.getComputedStyle(input,"::before").getPropertyValue("--wid");
    input.style.setProperty("--wid",((input.value)+"%"));
    price.innerHTML="$"+input.value+".00";
    views.innerHTML=input.value*10 +"k";
})

btn.addEventListener("click",function(){
    btn.classList.toggle("active");
})