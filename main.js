// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(div => {
//     div.addEventListener('click', () => {
//         const modal = document.querySelector(div.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// closeModalButtons.forEach(div => {
//     div.addEventListener('click', () => {
//         const modal = i.closest('.modal')
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }

const eightTrack = document.querySelector('.eight-track')
const snipIt = document.querySelector('.snip-it')
const eightModal = document.querySelector('.eight-modal')
const overlay = document.getElementById('overlay')
const closeButton = document.querySelector('.close')

eightTrack.addEventListener('click', openEightModal)
closeButton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

function openEightModal() {
    eightModal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal() {
    eightModal.classList.remove('active')
    overlay.classList.remove('active')
}
