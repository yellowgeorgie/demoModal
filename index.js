const closeButton = document.querySelector('.buttonClose');
const modal = document.querySelector('.modalWindow');
const menuButtons = document.querySelectorAll('.buttonModal');
const menuOverlay = document.querySelector('.menuOverlay');
const buttonMenu = document.querySelector('.buttonMenu');

for (let button of menuButtons) {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
        menuOverlay.classList.add('show');
        buttonMenu.style.filter = 'blur(2px)';
    });
}

const closeModal = () => {
    modal.style.display = 'none';
    menuOverlay.classList.remove('show');
    buttonMenu.style.filter = 'blur(0)';
};

closeButton.addEventListener('click', closeModal);

menuOverlay.addEventListener('click', closeModal);

window.document.addEventListener('keypress', evt => {
    if (evt.key === 'Escape') closeModal();
});
