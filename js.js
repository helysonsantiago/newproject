const mobile = document.querySelector('.menu-mobile');

mobile.addEventListener('click',() => {

    let menu = document.querySelector('nav')

    menu.classList.toggle('active')
    
})