// Entry animations script
const preloader = document.querySelector(".preloader");
const text = document.querySelector(".preloader__text--content");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

// changing every letter to span
for (let i = 0; i < splitText.length; i++) {
text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50); // latency between letter aniamtion

// Letter animations
function onTick(){
  const span = text.querySelectorAll('span')[char]
  span.classList.add('fade');
  char++;
  if(char===splitText.length){
    complete();
    preloader.classList.add('hide'); //Adding class for hiding black box
    return;
  }
}

//Stopping the timer
function complete(){
  clearInterval(timer);
  timer = null;
}

// BarbaJS scripts

barba.use(barbaCss);

barba.init({
  debug: true,
  transitions: [
{
    // Slide from home to project
      name: 'cover',
      from:{
        namespace: ['home']
      },
      to:{
        namespace: ['project']
      },
      leave(){}
    },
    // Slide on entering project page and leaving it
    {
      name: 'cover',
      from:{
        namespace: ['project']
      },
      to:{
        namespace: ['home']
      },
      enter(){},
      leave(){}
    }
  ]
});