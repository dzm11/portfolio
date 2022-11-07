// Device Friendly Product Slider With Progress Bar
// https://www.youtube.com/watch?v=LPBGK1gqXoU

const slider = document.querySelector('.software__grid');
const progressBar = document.querySelector('.progress__bar');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    progressBar.style.width  = `${getScrollPercentage()}%`
})

slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
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
    console.log(entry) 
    if (entry.isIntersecting){
      entry.target.classList.add('reveal')
      counterObserver.unobserve(entry.target);
    }
  })
},
{
  threshold: 1,
  rootMargin: "-50px 0px",
})
const counterAnimation = document.querySelectorAll('.counter');
counterAnimation.forEach((el) => counterObserver.observe(el));

//Counter Animation Observer

const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry) 
    if (entry.isIntersecting){
      entry.target.classList.add('rightToLeft')
      titleObserver.unobserve(entry.target);
    }
  })
},
{
  threshold: 1,
  rootMargin: "-50px 0px",
})
const titleAnimation = document.querySelectorAll('.title-animation');
titleAnimation.forEach((el) => titleObserver.observe(el));