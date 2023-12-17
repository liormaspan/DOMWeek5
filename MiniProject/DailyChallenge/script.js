const tasks = [];
const input=document.forms.add;
form.addEventListener("submit",add)

function addtasks(e){
    e.preventdefualt();
    if(input.value==""||input.value==" "){
        alert("add proper task")
    }
}
listTasks.innerHTML=""
const ul=document.createElement("ul")
listTasks.append(ul)
tasks.puse(input.value)
for(let todo of tasks){
    const newTodo=document.createElement("li")
    const button=document.createElement("button")
    button.textContent="x"
    button.addEventListener("click", function(){
        let position=tasks.indexOf(todo)
        tasks.splice(position,1)
        newTodo.remove()
    })
    newTodo.textContent=todo
    newTodo.append(button)
    ul.append(newTodo)
}
