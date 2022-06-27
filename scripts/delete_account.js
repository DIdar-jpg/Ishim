const deleteElem = document.getElementById('delete__btn');
deleteElem.addEventListener('click' ,  () =>{
   const delete_block = document.createElement('div');
   delete_block.className = 'delete__content__content';
   delete_block.innerHTML = `
         <h1 class="delete__title">
            Вы уверены что хотите удалить ваш аккаунт на ishim.com без восстановления? Все ваши личные данные,
            избранные и объявления удалятся без восстановления
         </h1>
         <div class="delete__btns__wrapper">
            <div class="red__btn" id="sure">Удалить</div>
            <div class="grey__btn" id="not_sure">Отменить</div>
         </div>`
   document.getElementById('delete__wrap').appendChild(delete_block);
   Next(delete_block);
});
 function Next(delete_block) {
   const sure = document.getElementById('sure');
   sure.addEventListener('click' , (e) => {
      e.preventDefault();
      makeRequest();
   })
   const not_sure = document.getElementById('not_sure');
   not_sure.addEventListener('click' , (e) => {
      e.preventDefault();
      document.getElementById('delete__wrap').removeChild(delete_block);
   });
};

