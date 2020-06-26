const eightTrack = document.querySelector('.eight-track')
const snipIt = document.querySelector('.snip-it')
const eightModal = document.querySelector('.eight-modal')
const snipModal = document.querySelector('.snip-modal')
const overlay = document.getElementById('overlay')
// const closeButton = document.querySelector('.close')

eightTrack.addEventListener('click', openEightModal)
snipIt.addEventListener('click', openSnipModal)
// closeButton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

function openEightModal() {
    eightModal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal() {
    eightModal.classList.remove('active')
    snipModal.classList.remove('active')
    overlay.classList.remove('active')
}

function openSnipModal() {
    snipModal.classList.add('active')
    overlay.classList.add('active')
}
