var topbar = document.getElementById('topbar'); //Localizar cuando se hace click en topbar


//logica modals windows
var loginModal = document.getElementById('login-modal');
var registerModal = document.getElementById('register-modal');


//Cuando se envia en submit, prevenir efecto para no recargar la página
var loginForm = document.getElementById('login-form');
var registerForm = document.getElementById('register-form');



// evento para abrir modal de login
if (topbar) {
    topbar.addEventListener('click', (e) => {
        if (e.target.parentElement.dataset.type != undefined) {
            if (e.target.parentElement.dataset.type == "login") {
                loginModal.classList.add('lightbox--show');
            } else if (e.target.parentElement.dataset.type == 'register') {
                registerModal.classList.add('lightbox--show');
            }
        }
    });
}


// evento para mirar is la ventana modal esta abierta, y cerrarla
if (registerModal) {
    registerModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox')) {
            registerModal.classList.remove('lightbox--show');
        }
    });
}

// evento para mirar is la ventana modal esta abierta, y cerrarla
if (loginModal) {
    loginModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox')) {
            loginModal.classList.remove('lightbox--show');
        }
    });
}
// prevenir evento de formulario
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        setTimeout(() => {
            e.target.button.blur();
            console.log('Send Login');
        }, 200);
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        setTimeout(() => {
            e.target.button.blur();
            console.log('Send Register');
        }, 200);
    })
}