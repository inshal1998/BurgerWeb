const header_container = document.querySelector('.header-container');
const close_icon = document.querySelector('.close-icon');

header_container.addEventListener('click' , (e)=>{
    header_container.classList.toggle('menu-open')
})

close_icon.addEventListener('click' , (e)=>{
    close_icon.classList.remove('menu-open')
})