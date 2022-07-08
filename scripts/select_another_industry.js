const selectIndustry = document.getElementById('user__industry');
selectIndustry.addEventListener('change' , (e) => {
  let index =  selectIndustry.selectedIndex;
  console.log(index);
  if(index == 14) {
    document.getElementById('industry__wrapper').removeChild(selectIndustry);
     const div = document.createElement('div');
     div.className = 'user-inp-blok';
     div.innerHTML = `<input required type="text" class="user-text" value="" placeholder="Другое" name="sphere" id="anotherIndustryId">`
     document.getElementById('industry__wrapper').appendChild(div);
  }
});
