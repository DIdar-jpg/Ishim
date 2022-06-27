document.getElementById('articles_fav').addEventListener('click' , (e) =>{
   if (document.getElementById('fav__wrapper2').classList.contains('disappear')) {
      document.getElementById('fav__wrapper2').classList.remove('disappear');
      document.getElementById('fav__wrapper2').classList.add('h__fav__art');
      document.getElementById('fav__btn__wrapper').classList.add('disappear');
      document.getElementById('fav__btn__wrapper').classList.remove('vac__card__wrapper');

      e.target.classList.add('gren__color');
      document.getElementById('vac_fav').classList.remove('gren__color');
   }
})
document.getElementById('vac_fav').addEventListener('click' , (e) =>{
   if (document.getElementById('fav__btn__wrapper').classList.contains('disappear')) {
      document.getElementById('fav__btn__wrapper').classList.remove('disappear');
      document.getElementById('fav__wrapper2').classList.remove('h__fav__art');
      document.getElementById('fav__wrapper2').classList.add('disappear');
      document.getElementById('fav__btn__wrapper').classList.add('vac__card__wrapper');
      e.target.classList.add('gren__color');
      document.getElementById('articles_fav').classList.remove('gren__color');
   }
})