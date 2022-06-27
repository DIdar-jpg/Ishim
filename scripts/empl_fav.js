document.getElementById('articles_fav').addEventListener('click' , (e) =>{
   if (document.getElementById('fav__wrapper2').classList.contains('disappear')) {
      document.getElementById('fav__wrapper2').classList.remove('disappear');
      document.getElementById('fav__btn__wrapper').classList.add('disappear');
      e.target.classList.add('gren__color');
      document.getElementById('vac_fav').classList.remove('gren__color');

   }
})
document.getElementById('vac_fav').addEventListener('click' , (e) =>{
   if (document.getElementById('fav__btn__wrapper').classList.contains('disappear')) {
      document.getElementById('fav__btn__wrapper').classList.remove('disappear');
      document.getElementById('fav__wrapper2').classList.add('disappear');
      e.target.classList.add('gren__color');
      document.getElementById('articles_fav').classList.remove('gren__color');

   }
})