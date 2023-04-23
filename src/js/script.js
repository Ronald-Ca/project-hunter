const buttonTrailer = document.querySelector('.button-trailer');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const video = document.getElementById('video')
const linkVideo = video.src

function toggleModal() {
    modal.classList.toggle('open');
}

function openModal() {
    toggleModal();
    video.setAttribute('src', linkVideo);
}

buttonTrailer.addEventListener('click', openModal);

function closeModalX() {
    toggleModal();
    video.setAttribute('src', '');
}

closeModal.addEventListener('click', closeModalX);
