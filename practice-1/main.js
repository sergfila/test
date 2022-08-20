/* Modal Opener/closer */
let modalWindow = document.querySelector('.modal');
let modalOpener = document.querySelector('.header__btn');
let modalCloser = document.querySelector('.modal__close');
let shadowScreen = document.querySelector('.shadow-screen')
modalOpener.addEventListener('click', () => {
    modalWindow.classList.remove('_d-none');
    modalWindow.classList.add('_d-block');
    shadowScreen.classList.add('_d-block');
    shadowScreen.classList.remove('_d-none');
})
modalCloser.addEventListener('click', () => {
    modalWindow.classList.remove('_d-block');
    modalWindow.classList.add('_d-none');
    shadowScreen.classList.remove('_d-block');
    shadowScreen.classList.add('_d-none');
})

/* Avatar */

let avatar = document.querySelector('.avatar-loader__icon label');
let clearAvatar = document.querySelector('.avatar-loader__close');
document.querySelector(".avatar-loader__icon input").addEventListener("change", function () {
    if (this.files[0]) {
        let fr = new FileReader();

        fr.addEventListener("load", function () {
            document.querySelector(".avatar-loader__icon label").style.backgroundImage = "url(" + fr.result + ")";
        }, false);

        fr.readAsDataURL(this.files[0]);
    }
});
clearAvatar.addEventListener('click', function () {
    avatar.style.backgroundImage = '';
    document.getElementById('pct').value = '';
})

/* Validation */
let arr = document.querySelectorAll('.modal__item input');
let sender = document.querySelector('.modal__form');

sender.addEventListener('submit', function (e) {
    e.preventDefault();
    let count = 0;
    for (let elem of arr) {
        if (elem.value === '') {
            count++
        }
    }

    if (document.getElementById('pct').files.length === 0) {
        count++;
    }

    if (count > 0) {
        alert('Необходимо заполнить все обязательные поля')
    } else {
        alert('Форма отправлена!')
        sender.reset();
        avatar.style.backgroundImage = '';
    }
})
