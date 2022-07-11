const mobile = document.querySelector('.menu-mobile');

mobile.addEventListener('click',() => {

    let menu = document.querySelector('nav')

    menu.classList.toggle('active')

    
    
})

const p = document.querySelector("#section");

const position = p.getBoundingClientRect();

    if (position.y < 0){

        let nav = document.querySelector("#nav");
        nav.style.background= "#0d1117";
        
    }else if(position.y == 0){

        let nav = document.querySelector("#nav");
        nav.style.background= "#161b22";

    }