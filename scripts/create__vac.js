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
        <input type="text" class="user-info-block__lang__item__txt" name="lang" id="user__lang"
        placeholder="Туркменский">
        <select name="lang_lev" id="lang__lev" class="user-info-block__lang__item__select">
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

//  let user_gender;
//  let user_exp;
//  let user_education;
//  let user_busyness;
//  let user_schedule;
//  document.getElementById('gender__block__wrapper').addEventListener('click' , (e) => {
//    if (e.target.tagName == 'input' || 'label'){
//      user_gender = e.target.value;
//    }
//  })
//  document.getElementById('user__exp__wrapper').addEventListener('click' , (e) => {
//    if (e.target.tagName == 'input' || 'label'){
//       user_exp = e.target.value;
//    }
//  })
//  document.getElementById('user__education__wrapper').addEventListener('click' , (e) => {
//    if (e.target.tagName == 'input' || 'label'){
//       user_education = e.target.value;
//    }
//  })
//  document.getElementById('user__busyness__wrapper').addEventListener('click' , (e) => {
//    if (e.target.tagName == 'input' || 'label'){
//       user_busyness = e.target.value;
//    }
//  })
//  document.getElementById('user__schedule__wrapper').addEventListener('click' , (e) => {
//    if (e.target.tagName == 'input' || 'label'){
//       user_schedule = e.target.value;
//    }
//  })
//  document.getElementById('btn').addEventListener('click' , function(e) {
//    e.preventDefault();
//    function createArr(cls) {
//       let arrName = [];
//       let elemName = document.getElementsByClassName(cls);
//       if (elemName.length > 0) {
//          for (let i = 0; i < elemName.length; i++) {
//           arrName.push(elemName[i].value)
//          }
//       }
//       return arrName
//     }
//    const lang = createArr('user-info-block__lang__item__txt');
//    const lang_lev = createArr('user-info-block__lang__item__select');

//    let body = {
//      position:document.getElementById('user__position').value,
//      sphere:document.getElementById('user__industry').value,
//      salary:document.getElementById('user__salary').value,
//      registration:document.getElementById('user__registration').value,
//      work_exp:user_exp,
//      min_age:document.getElementById('user__age__min').value,
//      max_age:document.getElementById('user__age__max').value,
//      gender:user_gender,
//      education: user_education,
//      langs: {
//       lang:lang,
//       lang_lev:lang_lev,
//      },
//      responssibilities: document.getElementById('user__job__resp').value,
//      work_conditions: document.getElementById('user__working__conditions').value,
//      busyness:user_busyness,
//      schedule:user_schedule,
//      addition_salary_info: document.getElementById('payment__additionally').value,
//      contacts: {
//       name: document.getElementById('user__name').value,
//       phone_number: document.getElementById('user__number').value,
//       email: document.getElementById('user__email').value,
//      },
//    }
//    makeRequest(body);
//    console.log(body);
//  });

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