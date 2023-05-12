
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const showPasswordBtn = document.getElementById('showPasswordBtn');
showPasswordBtn.addEventListener('click', function() {
    const passwordFieldType = passwordInput.type;
    const confirmPasswordFieldType = confirmPasswordInput.type;

    if (passwordFieldType === 'password' && confirmPasswordFieldType === 'password') {
        passwordInput.type = 'text';
        confirmPasswordInput.type = 'text';
        showPasswordBtn.textContent = 'Скрыть пароль';
    } else {
        passwordInput.type = 'password';
        confirmPasswordInput.type = 'password';
        showPasswordBtn.textContent = 'Показать пароль';
    }
});
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    return passwordRegex.test(password);
}
emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    const isValidEmail = validateEmail(email);
    if (isValidEmail) {
        emailInput.classList.remove('invalid');
    } else {
        emailInput.classList.add('invalid');
    }
});

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const isValidPassword = validatePassword(password);
    if (isValidPassword) {
        passwordInput.classList.remove('invalid');
    } else {
        passwordInput.classList.add('invalid');
    }
});

confirmPasswordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password === confirmPassword) {
        confirmPasswordInput.classList.remove('invalid');
    } else {
        confirmPasswordInput.classList.add('invalid');
    }
});


const box = document.querySelector('.box')
let positionY = 0
let positionX = 0

let sec = 0

function moveBox () {
    if (positionX <= 840 && positionY === 0)  {
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(moveBox, 20)
    } else if (positionX >= 840 && positionY <= 335) {
        positionY += 15
        box.style.top = `${positionY}px`
        setTimeout(moveBox, 20)
    }  else if (positionX > 0 && positionY >= 335) {
        positionX -= 16
        box.style.left = `${positionX}px`
        setTimeout(moveBox, 20)
    }   else {
        positionY -= 15
        box.style.top = `${positionY}px`
        setTimeout(moveBox, 20)
    }
}

requestAnimationFrame(moveBox)


