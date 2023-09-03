const accordion = document.querySelector('accordion-content')
const accordionItem = document.querySelector('accordion-item')
let height = 0

accordionItem.addEventListener('click', ()=> {
    if (!height){
        height = accordion.scrollHeight
    }else{
        height = 0
    }

    accordion.style.height = `$(height)px`
})