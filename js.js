

const mobile = document.querySelector('.menu-mobile');

mobile.addEventListener('click',() => {

    let menu = document.querySelector('nav')

    menu.classList.toggle('active')
    
     
})

const bgk = document.getElementById('img');

bgk.addEventListener('click',() => {

    let op = document.getElementById('bgk');
    
    op.classList.toggle('active')
     
    let bgkoff= document.getElementById('bgk');

    bgkoff.addEventListener('click',() => {

        bgkoff.classList.remove('active')
    })
    
})



const dark = document.querySelector('.dark');

dark.addEventListener('click',() => {

    let op = document.getElementById('body')

    op.classList.toggle('active')
     
    
})

const side = document.getElementById('arrow')

side.addEventListener('click',() => {

    let op = document.querySelector('.side-bar')

    op.classList.toggle('active')

    let ft = document.querySelector('.box-footer')

    if (op.classList.contains('active')){

        ft.classList.add('active');
    } else{

        ft.classList.remove('active');
    }
     
    
})



window.addEventListener('scroll',function(){

    let header = document.getElementById('nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrollinng-active',  windowPosition);

})
    


function leiaMais(){

    let lerMais=document.querySelector('.conteudo');
    let btn= document.getElementById('ver-mais');

    if(lerMais.style.display === "none"){
        lerMais.style.display ="flex";
        btn.innerHTML = "ver menos";
    } else{
        lerMais.style.display ="none";
        btn.innerHTML = "ver mais";
        
    }
 
}


ScrollReveal().reveal('.container', {
    delay: 405,
    duration: 500,
    reset: true
});