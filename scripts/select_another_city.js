const selectCity = document.getElementById('user__city');
selectCity.addEventListener('change' , (e) => {
  let index =  selectCity.selectedIndex;
  console.log(index);
  if(index == 9) {
   selectCity.classList.add('disappear');
     const div = document.createElement('div');
     div.className = 'user-inp-blok';
     div.innerHTML = `<input required type="text" class="user-text" value="" placeholder="Другое" name="another__city" id="another__city">`
     document.getElementById('city__wrapper').appendChild(div);
  }
});