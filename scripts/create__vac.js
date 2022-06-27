let nameNum = 1;
document.getElementById("user__lang__btn__wrapper").addEventListener("click", function (e) {
   const id = e.target.id;
   const div = document.createElement('div');
   div.className = 'user__lang__item';
   if (id == "addnew") {
     div.innerHTML = `                           
       <div class="user-info-block-subtitle">
         <div>Язык</div>
         <div>Уровень владения</div>
       </div>
 
       <div class="user-info-block__lang__item">
         <input type="text" class="user-info-block__lang__item__txt" name="user__lang${nameNum}"
         id="user__lang${nameNum}"
         placeholder="Туркменский">
         <select name="lang__lev${nameNum}" id="lang__lev${nameNum}" class="user-info-block__lang__item__select">
           <option value="ll1">Базовый</option>
           <option value="ll2">Продвинутый</option>
           <option value="ll3">Говорю свободно</option>
           <option value="ll4">В совершенстве</option>
           <option value="ll5">Профильный</option>
         </select>
       </div>`
     document.getElementById("user__lang__wrap").appendChild(div);
     console.log(div);
     nameNum++;
     console.log(nameNum);
     return nameNum;
   } else {
   }
 });


function makeRequest(body) {
   const xhr = new XMLHttpRequest();
   xhr.open(`POST`, `ВСТАВЬ ССЫЛКУ`);
   xhr.addEventListener("load", () => {
   });
   xhr.addEventListener("error", () => {
     console.log("error");
   });
   xhr.send(JSON.stringify(body));
 }



 let user_gender;
 let user_exp;
 let user_education;
 let user_busyness;
 let user_schedule;
 document.getElementById('gender__block__wrapper').addEventListener('click' , (e) => {
   if (e.target.tagName == 'input' || 'label'){
     user_gender = e.target.value;
   }
 })
 document.getElementById('user__exp__wrapper').addEventListener('click' , (e) => {
   if (e.target.tagName == 'input' || 'label'){
      user_exp = e.target.value;
   }
 })
 document.getElementById('user__education__wrapper').addEventListener('click' , (e) => {
   if (e.target.tagName == 'input' || 'label'){
      user_education = e.target.value;
   }
 })
 document.getElementById('user__busyness__wrapper').addEventListener('click' , (e) => {
   if (e.target.tagName == 'input' || 'label'){
      user_busyness = e.target.value;
   }
 })
 document.getElementById('user__schedule__wrapper').addEventListener('click' , (e) => {
   if (e.target.tagName == 'input' || 'label'){
      user_schedule = e.target.value;
   }
 })
 document.getElementById('btn').addEventListener('click' , function(e) {
   e.preventDefault();
   function createArr(cls) {
      let arrName = [];
      let elemName = document.getElementsByClassName(cls);
      if (elemName.length > 0) {
         for (let i = 0; i < elemName.length; i++) {
          arrName.push(elemName[i].value)
         }
      }
      return arrName
    }
   const lang = createArr('user-info-block__lang__item__txt');
   const lang_lev = createArr('user-info-block__lang__item__select');

   let body = {
     user_position:document.getElementById('user__position').value,
     user_industry:document.getElementById('user__industry').value,
     user_salary:document.getElementById('user__salary').value,
     user_registration:document.getElementById('user__registration').value,
     user_exp:user_exp,
     user_min_age:document.getElementById('user__age__min').value,
     user_max_age:document.getElementById('user__age__max').value,
     user_gender:user_gender,
     user_education: user_education,
     user_langs: {
      lang:lang,
      lang_lev:langlev,
     },
     user_responssibilities: document.getElementById('user__job__resp').value,
     user_work_conditions: document.getElementById('user__working__conditions').value,
     user_busyness:user_busyness,
     user_schedule:user_schedule,
     user_addition_salary_info: document.getElementById('payment__additionally').value,
     user_contacts: {
      user_name: document.getElementById('user__name').value,
      user_number: document.getElementById('user__number').value,
      user_email: document.getElementById('user__email').value,
     },
   }
   makeRequest(body);
   console.log(body);
 });

const select = document.getElementById('user__industry');
select.addEventListener('change' , (e) => {
   let index =  select.selectedIndex;
   console.log(index);
   if(index == 4) {
      select.classList.add('disappear');
      const div = document.createElement('div');
      div.className = 'user-inp-blok';
      div.innerHTML = `<input required type="text" class="user-text" value="" placeholder="Другое" name="anotherIndustry" id="anotherIndustryId">`
      document.getElementById('industry__wrapper').appendChild(div);
   }
})