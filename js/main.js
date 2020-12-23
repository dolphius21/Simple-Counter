// Variables
const countHTML = document.getElementById('count');
const btns = document.querySelectorAll('.btn');
let count = 0;

// Updates the background color of the site.
const updateColor = () => { 
   (count < 0) ? document.body.style.backgroundColor = '#de6868'
   : (count > 0) ? document.body.style.backgroundColor = '#68c49f'
   : document.body.style.backgroundColor = '#79d1ed';
};

// Selects button and defines it's functionality.
btns.forEach(btn => {
   btn.addEventListener('click', () => {
      (btn.title === 'increase') ? count++ 
      : (btn.title === 'decrease') ? count--
      : count = 0;

      countHTML.textContent = count;
      updateColor();
   })
});
