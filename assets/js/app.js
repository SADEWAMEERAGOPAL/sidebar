let cl=console.log;

const icon=document.querySelector(".iconplus")
const sidebar=document.getElementById("sidebar")
const dropDown=document.getElementById("dropDown")

const onClick=()=>{
sidebar.classList.toggle("active")

}

icon.addEventListener("click", onClick)
dropDown.addEventListener("click", onClick)