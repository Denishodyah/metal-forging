const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })


    menu.querySelectorAll('.menu__list-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')   
        })
    })
}
// ------------------------------------------------------


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchors => {
    anchors.addEventListener('click', Event => {
        Event.preventDefault();

        const blockID = anchors.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }  )
})



// ---------------modal-------------
document.getElementById("open-modal-btn").addEventListener("click", function(){
document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open")
    })
// закрытие модального окна с помощью Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// закрыть модал окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', Event => {
    Event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', Event => {
    if (Event._isClickWithInModal) return;
    Event.currentTarget.classList.remove('open');
});