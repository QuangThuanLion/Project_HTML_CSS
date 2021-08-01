// const signin = document.getElementById("registration");
// const modal = document.getElementById("modal");

// signin.onclick = function() {
//     modal.style.display = "block";
// }

// modal.addEventListener('click', function() {
//     modal.style.display = 'none';
// })
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const signin = $("#registration");
const modal = $('.modal');
const modalBody = $('.modal__body');
const modal_close_btn = $('.dialog-close-btn');

const signup_link = $('.modal__body-heading-signup-link');
const signin_link = $('.modal__body-heading-signin-link');
const modal__body_signup = $('.modal__body-signup');
const modal__body_sigin = $('.modal__body-signin');

const modal__heading_signup = $('.modal__body-heading--signup');
const modal__heading_signin = $('.modal__body-heading--signin');


function showModal() {
    modal.classList.add("open");
    modal__heading_signup.classList.add('active');
}

function hideModal() {
    removeClassModal();
    modal.classList.remove("open");
}

function removeClassModal() {
    modal__heading_signup.classList.remove('active');
    modal__heading_signin.classList.remove('active');

    modal__body_signup.classList.remove('closed');
    modal__body_signup.classList.remove('open');
    modal__body_sigin.classList.remove('open');
    modal__body_sigin.classList.remove('closed');

}

signin.addEventListener('click', showModal);

modal.addEventListener('click', hideModal);

modal_close_btn.addEventListener('click', hideModal)

modalBody.addEventListener('click', function(event) {
    event.stopPropagation();
})

signup_link.addEventListener('click', function() {
    modal__body_sigin.classList.remove('open');
    modal__body_signup.classList.remove('closed');
    modal__body_signup.classList.add('open');
    modal__heading_signin.classList.remove('active');

    modal__heading_signup.classList.add('active');
})

signin_link.addEventListener('click', function() {
    modal__body_signup.classList.remove('open');
    modal__body_signup.classList.add('closed');
    modal__heading_signup.classList.remove('active');

    modal__body_sigin.classList.add('open');
    modal__heading_signin.classList.add('active');
})