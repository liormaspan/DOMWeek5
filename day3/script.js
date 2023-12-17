let x=document.getElementById("jsstyle")
function respondClick(){
console.log("clicked");
}
x.addEventListener("click",respondClick)
x.style.backgroundColor="red"

function RespondMouseOver(){
console.log("my mouse is over")
}
x.addEventListener("mouseover",RespondMouseOver)

