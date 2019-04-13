// window.addEventListener("scroll", () => {
//   console.clear();
//   console.log(`Window innerHeight: ${window.innerHeight}`);
//   console.log(`Window pageYOffset: ${window.pageYOffset}`);
//   console.log(`Window scrollY: ${window.scrollY}`);
//   console.log(`Body offsetHeight: ${document.body.offsetHeight}`);

//   console.log(`Window innerHeight + Window pageYOffset = ${window.innerHeight + window.pageYOffset}`);
// })



/* ------------------------------------------- */
/* --------- Elementos generales ------------- */
/* ------------------------------------------- */
const sectionsTitles = Array.from(document.querySelectorAll(".container .title"));
const sectionsLeadTexts = Array.from(document.querySelectorAll(".container .lead"));
const footerText = document.querySelector(".footer__copyright");
const footerIcons = document.querySelector(".footer__icons");
const elementsArray = [...sectionsTitles, ...sectionsLeadTexts, footerText, footerIcons];

console.log(window.location.pathname)


// Animación de los elementos generales
window.addEventListener("scroll", () => {
  elementsArray.forEach((el) => {
    if(el.getBoundingClientRect().top <= window.innerHeight * 0.7 || window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      el.setAttribute("id", "reveal");
    }
  })
})


/* Revelar los elementos con scroll */
const revealElements = (container, items) => {
  if (container.getBoundingClientRect().top <= window.innerHeight * 0.7 || window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
    items.forEach((el, i) => {
      setTimeout(() => {
        el.setAttribute("id", "reveal");
      }, i*250)
    })
  }
}


/* ------------------------------------------- */
/* ---------- Elementos del home ------------- */
/* ------------------------------------------- */

const specialsContainer = document.querySelector(".specialize__specials");
const specials = Array.from(document.querySelectorAll(".specialize__specials div"));

const statsContainer = document.querySelector(".stats__container");
const statsItems = Array.from(document.querySelectorAll(".stats__item"));

const processItemsContainer = document.querySelector(".process__items");
const processItems = Array.from(document.querySelectorAll(".process__items > div"))


//Animación de los elementos de cada página
switch(window.location.pathname) {
  //Elementos del home
  case("/index.html"):
    window.addEventListener("scroll", () => {
      console.log("Scrolled from index")
      revealElements(specialsContainer, specials);
      revealElements(statsContainer, statsItems);
      revealElements(processItemsContainer, processItems);
    });
  break;
  
  //Elementos del about me
  case("/about.html"):
    window.addEventListener("scroll", () => {
      console.log("Scrolled from about me");
    })
  break;

  //Elementos del work
  case("/work.html"):
    window.addEventListener("scroll", () => {
      console.log("Scrolled from work");
    })
  break;

  //Elementos del contact me
  case("/contact.html"):
    window.addEventListener("scroll", () => {
      console.log("Scrolled from contact me");
    })
  break;
}
