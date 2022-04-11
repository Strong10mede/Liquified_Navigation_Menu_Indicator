/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)