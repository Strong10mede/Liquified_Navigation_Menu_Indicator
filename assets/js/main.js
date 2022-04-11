/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll(".nav__link");

function ScrollActive(){
    const scrollY = window.pageXOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute("id");

          if(scrollY > sectionTop && scrollY <= sectionHeight + sectionTop){
            document.getElementById(sectionId).classList.add("active__link");
        }
          else{
            document.getElementById(sectionId).classList.remove("active__link");         
          }       
    });    
}

window.addEventListener("scroll",ScrollActive);