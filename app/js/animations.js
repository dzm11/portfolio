// BarbaJS scripts
barba.use(barbaCss);

barba.init({
  transitions: [
{
    // Slide from home to project
      name: 'cover',
      namespace: ['home', 'project'],
      enter(){},
      leave(){}
    }
  ]
});

barba.hooks.beforeEnter(() => {
  document.body.scrollTop = 0;
  intersectionObservers();
});