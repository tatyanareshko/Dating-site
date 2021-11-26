var burger = document.querySelector('#burger');
var menuList = document.querySelector('.list-menu');

var closeBtn = document.querySelector('#close');

function openBurger() {

    burger.style.display = 'none';
    menuList.classList.add('show');
    closeBtn.style.display = 'block';
}

function closeBurger() {

    burger.style.display = 'block';
    menuList.classList.remove('show');
    closeBtn.style.display = 'none';
}


burger.addEventListener('click', openBurger);
closeBtn.addEventListener('click', closeBurger);




var btnOpenMessages = document.querySelector('#messages');

const showModalMessages = () => {
    const modalOpen = document.querySelector('.developing');
    modalOpen.classList.add('modal_open');

    const allContentBlur = document.querySelector('.mainBack');
    allContentBlur.classList.add('add-opacity');

    if (modalOpen.classList.contains('modal_open')) {
        setTimeout(() => {
            modalOpen.classList.remove('modal_open');
            allContentBlur.classList.remove('add-opacity');
        }, 1500)
    }
}

btnOpenMessages.addEventListener('click', showModalMessages);

