const inputEmail = document.querySelector('.inputEmail')
const button = document.querySelector('.buttonForm')
const form = document.querySelector('.formEmail')
const spanError = document.querySelector('.spanError')

form.onsubmit = (e) => {
    let re = /\S+@\S+\.\S+/;
    if(re.test(inputEmail.value)) {
        form.submit()
        spanError.classList.remove("active")
        inputEmail.classList.remove('error')
    } 
    else {
        e.preventDefault()
        spanError.classList.add("active")
        inputEmail.classList.add('error')
    }
}