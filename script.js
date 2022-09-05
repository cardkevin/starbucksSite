const btn = document.getElementById('menu-btn')
const mobileBtn = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    mobileBtn.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}
btn.addEventListener('click', navToggle)