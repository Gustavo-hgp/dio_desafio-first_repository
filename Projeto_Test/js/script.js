/*ScroolReveal*/
const scrollReveal = ScrollReveal({
    origin: "top",
    distance:"90px",
    duration: 900,
    reste: true,
});
scrollReveal.reveal(
    `
    .banner button, .banner-elementos p, .banner h1, #text-main,
    #cards, .banner-fim, .banner-fim button
    `,
    
    
    {internal: 100}
);







const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
    if (this.window.scrollY >= 560) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }
  
  /* When Scroll */
  window.addEventListener("scroll", function () {
    backToTop();
  });