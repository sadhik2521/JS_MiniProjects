let todoInput = document.getElementById("whistlist-adder")
let todoBtn = document.getElementById("btn-submit")

todoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(todoInput.value)
    todoInput.value = "";
})