const firstNameValue = document.querySelector(".firstNameField")
const lastNameValue = document.querySelector(".lastNameValue")
const EmailValue = document.querySelector(".emailValue")
const passValue = document.querySelector(".passValue")
let subBtn = document.getElementById("subBtn")


subBtn.addEventListener("click", (err) => {
    err.preventDefault();

    console.log("form submitted")
})