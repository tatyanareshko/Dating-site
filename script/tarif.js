
const noCard = () => {
    var buttons = document.querySelectorAll('.btn-pay');
   
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const modalOpen = document.querySelector('.developing');
            const mainBackground = document.querySelector('.mainBack');

            modalOpen.classList.add('modal_open');
            mainBackground.classList.add('add-opacity');

             if (modalOpen.classList.contains('modal_open')) {
                setTimeout(() => {
                    modalOpen.classList.remove('modal_open');
                    mainBackground.classList.remove('add-opacity');
                }, 1200)
            } 
        })
    })
}
noCard();