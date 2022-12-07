try{
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".data-scroll-container"),
    smooth: true,
});

const lazyImages = document.querySelectorAll('.lazy');
lazyImages.forEach(img=>{
  img.addEventListener('load',()=>{
    locoScroll.update()
  })
})
// // Initializing Imagesloaded for locomotive refresh height
// let scrollContainer = document.querySelector(".data-scroll-container");
// imagesLoaded( scrollContainer, function( instance ) {
//   console.log('all images are loaded');
// });


//   /* update scroll (height) when all images are loaded */
//   var body = document.body,
//     html = document.documentElement;

// var height = Math.max( body.scrollHeight, body.offsetHeight, 
//                        html.clientHeight, html.scrollHeight, html.offsetHeight );

//                        console.log(height)
//   imagesLoaded(scrollContainer, { background: true }, function () {
//     locoScroll.update();
//     var newheight = Math.max( body.scrollHeight, body.offsetHeight, 
//       html.clientHeight, html.scrollHeight, html.offsetHeight );

//       console.log(newheight)
//   });


// Device Friendly Product Slider With Progress Bar + circle mouse
// https://www.youtube.com/watch?v=LPBGK1gqXoU
  const slider = document.querySelector('.software__grid'); //cursor too
  const progressBar = document.querySelector('.progress__bar');
  let mouseCursor = document.querySelector('.mouse__cursor')
  
  let sliderGrabbed = false;
  
  slider.parentElement.addEventListener('scroll', (e) => {
      progressBar.style.width  = `${getScrollPercentage()}%`;
  
  })
  
  slider.addEventListener('mousedown', (e) => {
      sliderGrabbed = true;
  })
  
  slider.addEventListener('mouseup', (e) => {
      sliderGrabbed = false;
  })
  
  slider.addEventListener('mouseleave', (e) => {
      sliderGrabbed = false;
      mouseCursor.classList.remove('mouse__cursor--active');
  })
  
  slider.addEventListener('mouseenter', (e) => {
    mouseCursor.classList.add('mouse__cursor--active');
  })
  
  slider.addEventListener('mousemove', (e) => {
    let el = document.querySelector('.container');
    let st = window.getComputedStyle(el);
    let tr = st.getPropertyValue("-webkit-transform") ||
              st.getPropertyValue("-moz-transform") ||
              st.getPropertyValue("-ms-transform") ||
              st.getPropertyValue("-o-transform") ||
              st.getPropertyValue("transform") || FAIL;
      var values = tr.split('(')[1];
      values = values.split(')')[0];
      values = values.split(', ');
      // console.log(values[5]);
  
      mouseCursor.style.top = ((+values[5] * (-1)) + +e.clientY) + 'px';
      mouseCursor.style.left = e.clientX + 'px';
  
      if(sliderGrabbed){
          slider.parentElement.scrollLeft -= e.movementX;
      }
  })
  
  // slider.addEventListener('wheel', (e) =>{
  //     e.preventDefault()
  //     slider.parentElement.scrollLeft += e.deltaY;
  // })
  
  function getScrollPercentage(){
     return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
  }
  
}
catch(err){
console.log(err);
}


// MAGNETIC BUTTONS
// https://www.codingsnow.com/2021/03/tutorial51.html

const magnetic = document.querySelectorAll(".magnetic");

magnetic.forEach((btn) => {
  btn.addEventListener("mousemove", function(e){
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].style.transform = "translate(" + x * 0.1 + "px, " + y * 0.3 + "px)";
  });
});

magnetic.forEach((btn) => {
  btn.addEventListener("mouseout", function(e){
    btn.children[0].style.transform = "translate(0px, 0px)";
  });
});

//First Entry Animation Observer

firstEntry = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show')
      firstEntry.unobserve(entry.target);
    }
  })
},
{
})

const hiddenElements = document.querySelectorAll('.entry');
hiddenElements.forEach((el) => firstEntry.observe(el));


//Counter Animation Observer

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry) 
    if (entry.isIntersecting){
      entry.target.classList.add('reveal')
      counterObserver.unobserve(entry.target);
    }
  })
},
{
  threshold: 1,
  // rootMargin: "-50px 0px",
})
const counterAnimation = document.querySelectorAll('.counter');
counterAnimation.forEach((el) => counterObserver.observe(el));

//Counter Animation Observer

const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry) 
    if (entry.isIntersecting){
      entry.target.classList.add('rightToLeft')
      titleObserver.unobserve(entry.target);
    }
  })
},
{
  // threshold: 1,
  // rootMargin: "-50px 0px",
})
const titleAnimation = document.querySelectorAll('.title-animation');
titleAnimation.forEach((el) => titleObserver.observe(el));

//Grid Carousel Animation Observer

const carouselObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('grid-reveal')
      carouselObserver.unobserve(entry.target);
    }
  })
},
{
  // threshold: 1,
  // rootMargin: "-50px 0px",
})
const carouselAnimation = document.querySelectorAll('.software__content');
carouselAnimation.forEach((el) => carouselObserver.observe(el));

//Confident Section Elements Animation Observer

const confidentSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('confident-reveal')
      confidentSectionObserver.unobserve(entry.target);
    }
  })
},
{
  // threshold: 1,
  rootMargin: "0px 0px -20px 0px",
})
const condifentSectionAnimation = document.querySelectorAll('.confident__content--element');
condifentSectionAnimation.forEach((el) => confidentSectionObserver.observe(el));


//Experience Animation Observer

const experienceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('experience-reveal')
      experienceObserver.unobserve(entry.target);
    }
  })
},
{
  rootMargin: "0px 0px -50px 0px",
})
const experienceAnimation = document.querySelectorAll('.company');
experienceAnimation.forEach((el) => experienceObserver.observe(el));


window.addEventListener("mousemove", cursor);
function cursor(e){
  // console.log(values[5]);
  // console.log(tr);
}