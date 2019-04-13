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

const revealProgressBars = (bars) => {
  bars.forEach((bar, i) => {
    setTimeout(() => {
      bar.setAttribute("id", "revealProgressBars")
    }, i*250);
  })
}


/* ------------------------------------------- */
/* ---------- Elementos del home ------------- */
/* ------------------------------------------- */
const specialsContainer = document.querySelector(".specialize__specials");
const specials = Array.from(document.querySelectorAll(".specialize__specials div"));

const statsContainer = document.querySelector(".stats__container");
const statsItems = Array.from(document.querySelectorAll(".stats__item"));

const processItemsContainer = document.querySelector(".process__items");
const processItems = Array.from(document.querySelectorAll(".process__items > div"));


/* ------------------------------------------- */
/* ---------- Elementos del about me --------- */
/* ------------------------------------------- */
const aboutMeInfo = document.querySelector(".about-me__info");
const aboutMeInfoItems = Array.from(document.querySelectorAll(".about-me__info > div"));

const awardsContainer = document.querySelector(".about-me__awards-container");
const awardsArray = Array.from(document.querySelectorAll(".about-me__award"));

const progressBarsContainer = document.querySelector(".progress-bars .container");
const progressBarsTitles = Array.from(document.querySelectorAll(".progress-bars h4"));
const progressBarsArray = Array.from(document.querySelectorAll(".progress-bars__bar-container"));

const aboutLogosContainer = document.querySelector(".about-logos");
const aboutLogos = Array.from(document.querySelectorAll(".about-logos__logo"));

const testimonialsContainer = document.querySelector(".testimonials__testimonials-container");
const testimonials = Array.from(document.querySelectorAll(".testimonials__testimonial"));


//Animación de los elementos de cada página
switch(window.location.pathname) {
  //Elementos del home
  case("/index.html"):
    window.addEventListener("scroll", () => {
      revealElements(specialsContainer, specials);
      revealElements(statsContainer, statsItems);
      revealElements(processItemsContainer, processItems);
    });
  break;
  
  //Elementos del about me
  case("/about.html"):
    window.onload = () => {
      document.querySelector(".about-me .title").setAttribute("id", "reveal");
      document.querySelector(".about-me .lead").setAttribute("id", "reveal");
      revealElements(aboutMeInfo, aboutMeInfoItems);
    }
    window.addEventListener("scroll", () => {
      revealElements(awardsContainer, awardsArray);
      revealElements(progressBarsContainer, progressBarsTitles);

      if (progressBarsContainer.getBoundingClientRect().top <= window.innerHeight * 0.7 || window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
        revealProgressBars(progressBarsArray)
      };

      revealElements(aboutLogosContainer, aboutLogos);
      revealElements(testimonialsContainer, testimonials);
    });
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