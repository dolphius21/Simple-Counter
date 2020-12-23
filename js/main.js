const countHTML = document.getElementById('count');
const btns = document.querySelectorAll('.btn');
let count = 0;

const checkCount = () => { 
   (count < 0) ? document.body.style.backgroundColor = '#de6868'
   : (count > 0) ? document.body.style.backgroundColor = '#68c49f'
   : document.body.style.backgroundColor = '#79d1ed';
};

const updateCount = () => countHTML.textContent = count;

btns.forEach(btn => {
   btn.addEventListener('click', () => {
      (btn.title === 'increase') ? count++ 
      : (btn.title === 'decrease') ? count--
      : count = 0;

      checkCount();
      updateCount();
   })
});
