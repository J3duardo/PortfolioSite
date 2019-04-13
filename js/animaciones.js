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

//Revelar elementos cuando cargue la página
const onLoadHandler = (selector) => {
  document.querySelectorAll(selector).forEach(el => {
    el.setAttribute("id", "reveal");
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
/* ------------ Elementos del work ----------- */
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


/* ------------------------------------------- */
/* ---------- Elementos del about me --------- */
/* ------------------------------------------- */
const galleryContainer = document.querySelector(".my-work__gallery");
const galleryItems = Array.from(document.querySelectorAll(".my-work__gallery-item"));


/* ------------------------------------------- */
/* --------- Elementos del contact------------ */
/* ------------------------------------------- */
const formContainer = document.querySelector(".contact__form-inputs");
const formInputs = Array.from(document.querySelectorAll(".contact__form-inputs > *"));
const formButton = document.querySelector(".contact__btn");
const formItems = [...formInputs, formButton];
const iconsContainer = document.querySelector(".contact__icons");
const iconsArray = Array.from(document.querySelectorAll(".contact__icons-icon"));
const copyContainer = document.querySelector(".contact__copy");
const copy = [document.querySelector(".contact__copy h1")];



//Animación de los elementos de cada página
if(window.location.href.endsWith("/index.html")) {
  if(window,innerWidth <= 500) {
    onLoadHandler(".specialize .title")
    onLoadHandler(".specialize .lead");
    onLoadHandler(".specialize__specials div");
  }

  window.addEventListener("scroll", () => {
    revealElements(specialsContainer, specials);
    revealElements(statsContainer, statsItems);
    revealElements(processItemsContainer, processItems);
  });
} else if (window.location.href.endsWith("/about.html")) {
  window.onload = () => {
    onLoadHandler(".about-me .title");
    onLoadHandler(".about-me .lead");
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
} else if (window.location.href.endsWith("/work.html")) {
  window.onload = () => {
    onLoadHandler(".my-work .title");
    onLoadHandler(".my-work .lead");
    revealElements(galleryContainer, galleryItems);
  }
} else if (window.location.href.endsWith("/contact.html")) {
  window.onload = () => {
    onLoadHandler(".contact .title");
    onLoadHandler(".contact .lead");
    revealElements(formContainer, formItems);
  }
  window.addEventListener("scroll", () => {
    revealElements(iconsContainer, iconsArray);
    revealElements(copyContainer, copy);
  })
}