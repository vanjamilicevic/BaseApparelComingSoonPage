let email = document.getElementById("email")
let button = document.getElementById("arrow-button")
let error_message = document.getElementById("error-message")
let error_mark = document.getElementById("error-mark")

button.addEventListener("click", () => {
    if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
        error_message.classList.add("not-visible")
        error_mark.classList.add("not-visible")
    } else {
        error_message.classList.remove("not-visible")
        error_mark.classList.remove("not-visible")
    }
})