const buttom=document.getElementById("lib-button")
buttom.addEventListener("click",theClick)
 
function theClick(e){
    e.preventDefault()

    const noun=document.getElementById("noun").value
    const adjective=document.getElementById("adjective").value
    const person=document.getElementById("person").value
    const verb=document.getElementById("verb").value
    const place=document.getElementById("place").value

    if(noun==""|| adjective==""|| person==""|| verb==""|| place=="")return
     console.log("all fillde",noun,
     adjective
     ,person
     ,verb
     ,place);
    const story= mystory(noun,adjective,person,verb,place)
    console.log(story);

}


function mystory(noun,adjective,person,verb,place){
    return(`i like to play${noun},its the biggest ${adjective} in the world,my idol is ${person}, he is one of ${verb}, is current club is ${place}`)
}







function buttom2(){
    return document.getElementById("lib-button")
}