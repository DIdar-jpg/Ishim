const selectCity = document.getElementById('user__registration');
selectCity.addEventListener('change' , (e) => {
  let index =  selectCity.selectedIndex;
  console.log(index);
  if(index == 9) {
    document.getElementById('user__registration__wrapper').removeChild(selectCity);
     const div = document.createElement('div');
     div.className = 'user-inp-blok';
     div.innerHTML = `<input required type="text" class="user-text" value="" placeholder="Другое" name="registration" id="another__city">`
     document.getElementById('user__registration__wrapper').appendChild(div);
  }
});