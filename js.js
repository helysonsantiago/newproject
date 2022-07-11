const mobile = document.querySelector('.menu-mobile');

mobile.addEventListener('click',() => {

    let menu = document.querySelector('nav')

    menu.classList.toggle('active')
    
    
    
})


const dark = document.querySelector('.tema');

dark.addEventListener('click',() => {

    let op = document.getElementById('body')

    op.classList.toggle('active')
    
    
    
})


window.addEventListener('scroll',function(){

    let header = document.getElementById('nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrollinng-active',  windowPosition);

})
    