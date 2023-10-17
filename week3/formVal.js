const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPwd = document.getElementById('confirmPassword')
const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    validateUsername()
    validateEmail()
    validatePassword()
    validateConfirmPassword()
   
})
const isValidEmail = email => {
    const re =/\S+@\S+.\S+/
    return re.test(String(email).toLowerCase())
}



const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(' .error')
   
    inputControl.classList.add('error1')
    inputControl.classList.remove('success')
    errorDisplay.style.color = "red"
    errorDisplay.innerHTML= message
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector(' .error')
    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error1')
}

function validateUsername(){
    
    const usernameValue = username.value.trim()
    if (usernameValue === '') {
        setError(username, 'Username is required')
    } else {
        setSuccess(username)
    }
}
function validateEmail(){
    const emailValue = email.value.trim()
    if (emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
    }
}
function validatePassword(){
    const passwordValue = password.value.trim()
    if (passwordValue === '') {
        setError(password, 'Password is required')
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be atleast 8 characters')
    } else {
        setSuccess(password)
    }
}

function validateConfirmPassword(){
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPwd.value.trim()
    if (confirmPasswordValue === '') {
        setError(confirmPwd, 'Please confirm password')
    } else if(confirmPasswordValue!=passwordValue){
        setError(confirmPwd, 'Password doesn\'t match')
    }
    else {
        setSuccess(confirmPwd)
    }
}