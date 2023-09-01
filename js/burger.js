let menuBurger = document.getElementById('menu-burger');
let navBar = document.querySelector('.nav');

menuBurger.addEventListener('click', ()=>{
    document.body.classList.toggle('lock')
    menuBurger.classList.toggle('active');
    navBar.classList.toggle('active');
});

//Прокрутка при клике

const menuLinks = document.querySelectorAll('.link[data-goto]');
if (menuLinks.length > 0){
    menuLinks.forEach((menuLink)=>{
        menuLink.addEventListener('click', onMenuLinkClick)
    });
}

function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.fixed-nav-bar').offsetHeight;

            if(menuBurger.classList.contains('active')){
                document.body.classList.remove('lock')
                menuBurger.classList.remove('active');
                navBar.classList.remove('active');
            }


        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
        e.preventDefault();
    }
}

