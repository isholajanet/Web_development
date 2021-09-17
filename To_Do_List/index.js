let input = document.getElementById("todo")
let addButton = document.getElementById("button")
let tasks = document.getElementById("to_do_list")

addButton.addEventListener('click', ()=>{
    let text = document.createElement("p")
    text.innerText = input.value
    text.style.color = "aliceblue"
    text.style.marginLeft = "-30px"
    tasks.appendChild(text)
    input.value = ""
    text.addEventListener("click", function(){
        text.style.textDecoration = "line-through"
    })
    text.addEventListener("dblclick", ()=>{
        tasks.removeChild(text)
    })
})