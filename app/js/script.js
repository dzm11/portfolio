// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".data-scroll-container"),
//     smooth: true,
// });

// const lazyImages = document.querySelectorAll('.lazy');
// lazyImages.forEach(img=>{
//   img.addEventListener('load',()=>{
//     locoScroll.update()
//   })
// })

// MAGNETIC BUTTONS
// https://www.codingsnow.com/2021/03/tutorial51.html

const magnetic = document.querySelectorAll(".magnetic");

magnetic.forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].style.transform =
      "translate(" + x * 0.1 + "px, " + y * 0.3 + "px)";
  });
});

magnetic.forEach((btn) => {
  btn.addEventListener("mouseout", function (e) {
    btn.children[0].style.transform = "translate(0px, 0px)";
  });
});

//First Entry Animation Observer

firstEntry = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      firstEntry.unobserve(entry.target);
    }
  });
}, {});

const hiddenElements = document.querySelectorAll(".entry");
hiddenElements.forEach((el) => firstEntry.observe(el));

//Counter Animation Observer

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        counterObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);
const counterAnimation = document.querySelectorAll(".counter");
counterAnimation.forEach((el) => counterObserver.observe(el));

//Counter Animation Observer

const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("rightToLeft");
      titleObserver.unobserve(entry.target);
    }
  });
});
const titleAnimation = document.querySelectorAll(".title-animation");
titleAnimation.forEach((el) => titleObserver.observe(el));

//Grid Carousel Animation Observer

const carouselObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("grid-reveal");
      carouselObserver.unobserve(entry.target);
    }
  });
});
const carouselAnimation = document.querySelectorAll(".software__content");
carouselAnimation.forEach((el) => carouselObserver.observe(el));

//Confident Section Elements Animation Observer

const confidentSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("confident-reveal");
        confidentSectionObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -20px 0px",
  }
);
const condifentSectionAnimation = document.querySelectorAll(
  ".confident__content--element"
);
condifentSectionAnimation.forEach((el) => confidentSectionObserver.observe(el));

//Experience Animation Observer

const experienceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("experience-reveal");
        experienceObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -50px 0px",
  }
);
const experienceAnimation = document.querySelectorAll(".company");
experienceAnimation.forEach((el) => experienceObserver.observe(el));

window.addEventListener("mousemove", cursor);
function cursor(e) {}
