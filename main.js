const todoInputEl = document.getElementById("todo-input")
const todoAddEl = document.getElementById("todo-add")
const todoListEl = document.getElementById("todo-list")

todoAddEl.addEventListener("click", function() {
    todoListEl = document.getElementById("todo-smth")
    
    let inputText = todoInputEl.value
    if (!inputText) {
        alert("Gap yo!")
        return
    }

    let divEl = document.createElement("div")

    let inputEl = document.createElement("input")
    inputEl.value = inputText
    inputEl.disabled = true
    divEl.appendChild(inputEl)

    let editBtn = document.createElement("button")
    editBtn.innerText = "edit"
    divEl.appendChild(editBtn)

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "delete"
    divEl.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", function(event) {
        divEl.remove()
    })

    editBtn.addEventListener("click", function(event) {
        if (event.target.innerText == "edit") {
            inputEl.disabled = false
            editBtn.innerText = "save"
            deleteBtn.disabled = true
        } else {
            if (!inputEl.value) {
                alert("O'sha gap!")
                return
            }
            inputEl.disabled = true
            editBtn.innerText = "edit"
            deleteBtn.disabled = false
        }
    })

    todoListEl.appendChild(divEl)

    todoInputEl.value = ""
})
