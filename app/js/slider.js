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

    mouseCursor.style.top = ((+values[5] * (-1)) + +e.clientY) + 'px';
    mouseCursor.style.left = e.clientX + 'px';

    if(sliderGrabbed){
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

function getScrollPercentage(){
  console.log(slider);
   return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
}