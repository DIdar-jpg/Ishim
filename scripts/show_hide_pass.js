const passwordID = document.getElementById('user__password');
const passwordCheckID = document.getElementById('user__password__check');
document.getElementById('form__id').addEventListener('click' , e => {
   if (e.target.id == 'eye__btn') {
      if (e.target.getAttribute('src') == '../../src/images/close__eye.svg') {
         e.target.src = '../../src/images/open__eye.svg';
         e.target.previousElementSibling.type = 'text';
      }else{
         e.target.src = '../../src/images/close__eye.svg';  
         e.target.previousElementSibling.type = 'password';
      }

   }
})