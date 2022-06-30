let nameNum = 1;
document.getElementById("user__exp__btn__wrap").addEventListener("click", function (e) {
  const id = e.target.id;
  const div = document.createElement('div');
  if (id == "addnew") {
    div.innerHTML = `        
      <div>
        <h2 class="fw500">Опыт работы</h2>
        <h2>Какую должность вы занимали?</h2>
        <input type="text" class="user-text user__txt__exp__pos" value="" name="position">

        <h2>Как называлсь организация?</h2>
        <input type="text" class="user-text user__last__comp__name__exp" value="" name="org_name">

        <h2 class="fw500 user-info-block-title">Обязанности</h2>
        <div class="user__info__block__txt__area__wrapper">
            <textarea name="responsibilities" id="job__resp"
              class="user-info-block-txtarea user__response__exp"
              placeholder="Расскажите обязанности и задачи которые вы выполняли на рабочем месте"></textarea>
        </div>
        <div class="user__time">
            <h2>Начало работы</h2>
            <select name="start__mon" id="user__exp__time__start__mon"
              class="user__time__item user-select-bg user__time__start__mon__exp">
              <option value="01">Январь</option>
              <option value="02">Февраль</option>
              <option selected value="03">Март</option>
              <option value="04">Апрель</option>
              <option value="05">Май</option>
              <option value="06">Июнь</option>
              <option value="07">Июль</option>
              <option value="08">Август</option>
              <option value="09">Сентябрь</option>
              <option value="10">Октябрь</option>
              <option value="11">Ноябрь</option>
              <option value="12">Декабрь</option>
            </select>

            <div class="horizontal__row"></div>

            <select name="start_year" id="user__exp__time__start__year"
              class="user__time__item user-select-bg user__time__start__year__exp">
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option selected value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
            </select>
        </div>

        <div class="user__time">
            <h2>Окончание работы</h2>
            <select name="end__mon" id="user__exp__time__end__mon"
              class="user__time__item user-select-bg user__time__end__mon__exp">
              <option value="Jan">Январь</option>
              <option value="Feb">Февраль</option>
              <option selected value="">Март</option>
              <option value="Apr">Апрель</option>
              <option value="May">Май</option>
              <option value="Jun">Июнь</option>
              <option value="Jul">Июль</option>
              <option value="Agu">Август</option>
              <option value="Sep">Сентябрь</option>
              <option value="Okt">Октябрь</option>
              <option value="Nov">Ноябрь</option>
              <option value="Dec">Декабрь</option>
            </select>

            <div class="horizontal__row"></div>

            <select name="end_year" id="user__exp__time__end__year"
              class="user__time__item user-select-bg user__time__end__year__exp">
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option selected value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
            </select>

            <div class="user__time__checkbox__wrapper">
              <input type="checkbox" class="user__time__checkbox" id="user__t__chk"
                  name="user__t__chk" value="forpres">
              <label for="user__t__chk" class="user__time__checkbox__label work_pres">Работаю по
                  настоящее
                  время</label>
            </div>
        </div>
      </div>
    `
    document.getElementById("user__exp__wrap").appendChild(div);
    nameNum++;
    return nameNum;
  } else {
  }
});


document.getElementById("user__lang__btn__wrapper").addEventListener("click", function (e) {
  const id = e.target.id;
  const div = document.createElement('div');
  div.className = 'user__lang__item';
  if (id == "addnew") {
    div.innerHTML = `                           
    <div id="user__lang__wrap">
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
          <option value="ll3">Свободно</option>
          <option value="ll4">Совершенный</option>
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

document.getElementById("user__educ__btn__wrap").addEventListener("click", function (e) {
  const id = e.target.id;
  const div = document.createElement('div');
  div.className = 'user__educ__wrapper';
  if (id == "addnew") {
    div.innerHTML = `                           
    <h2 class="fw500">Образование</h2>
    <div class="user__exp__block" id="user__education__wrapper">
       <input required type="radio" id="educ1${nameNum}" value="educ1" name="degree${nameNum}">
       <label for="educ1${nameNum}" class="user__exp__item">среднее</label>
       <input required type="radio" id="educ2${nameNum}" value="educ2" name="degree${nameNum}">
       <label for="educ2${nameNum}" class="user__exp__item">средне-специальное</label>
       <input required type="radio" id="educ3${nameNum}" value="educ3" name="degree${nameNum}">
       <label for="educ3${nameNum}" class="user__exp__item">неоконченное высшее</label>
       <input required type="radio" id="educ4${nameNum}" value="educ4" name="degree${nameNum}">
       <label for="educ4${nameNum}" class="user__exp__item">высшее</label>
       <input required type="radio" id="educ5${nameNum}" value="educ4" name="degree${nameNum}">
       <label for="educ5${nameNum}" class="user__exp__item">высшее</label>
       <input required type="radio" id="educ6${nameNum}" value="educ5" name="degree${nameNum}">
       <label for="educ6${nameNum}" class="user__exp__item">магистр</label>
       <input required type="radio" id="educ7${nameNum}" value="educ6" name="degree${nameNum}">
       <label for="educ7${nameNum}" class="user__exp__item">кандидат наук</label>
       <input required type="radio" id="educ8${nameNum}" value="educ7" name="degree${nameNum}">
       <label for="educ8${nameNum}" class="user__exp__item">доктор наук</label>
    </div>


    <h2>Учебное заведение</h2>
    <input type="text" class="user-text user__edu__instance" value="" name="establishment"
       id="user__edu__inst">




    <h2>Факультет</h2>
    <input type="text" class="user-text" value="" name="faculty" id="user__faculty">



    <h2>Специализация</h2>
    <input type="text" class="user-text user__specialize" value="" name="specialization"
       id="user__spec">



    <div class="user__time">
       <div class="user__titles">
          <h2>Год начала</h2>
          <h2>Год окончания</h2>
       </div>
       <div class="user__time__inner">
          <select name="start_year" id="user__time__educ__start__year"
             class="user__time__item user-select-bg user__time__start__year__educ">
             <option value="2004">2004</option>
             <option value="2003">2003</option>
             <option selected value="2002">2002</option>
             <option value="2001">2001</option>
             <option value="2000">2000</option>
             <option value="1999">1999</option>
             <option value="1998">1998</option>
             <option value="1997">1997</option>
             <option value="1996">1996</option>
             <option value="1995">1995</option>
             <option value="1994">1994</option>
             <option value="1993">1993</option>
             <option value="1992">1992</option>
             <option value="1991">1991</option>
             <option value="1990">1990</option>
             <option value="1989">1989</option>
             <option value="1988">1988</option>
             <option value="1987">1987</option>
             <option value="1986">1986</option>
             <option value="1985">1985</option>
             <option value="1984">1984</option>
             <option value="1983">1983</option>
             <option value="1982">1982</option>
             <option value="1981">1981</option>
             <option value="1980">1980</option>
             <option value="1979">1979</option>
             <option value="1978">1978</option>
             <option value="1977">1977</option>
             <option value="1976">1976</option>
             <option value="1975">1975</option>
          </select>

          <div class="horizontal__row"></div>


          <select name="end_year" id="user__time__educ__end__year"
             class="user__time__item user-select-bg user__time__start__year__educ">
             <option value="2004">2004</option>
             <option value="2003">2003</option>
             <option selected value="2002">2002</option>
             <option value="2001">2001</option>
             <option value="2000">2000</option>
             <option value="1999">1999</option>
             <option value="1998">1998</option>
             <option value="1997">1997</option>
             <option value="1996">1996</option>
             <option value="1995">1995</option>
             <option value="1994">1994</option>
             <option value="1993">1993</option>
             <option value="1992">1992</option>
             <option value="1991">1991</option>
             <option value="1990">1990</option>
             <option value="1989">1989</option>
             <option value="1988">1988</option>
             <option value="1987">1987</option>
             <option value="1986">1986</option>
             <option value="1985">1985</option>
             <option value="1984">1984</option>
             <option value="1983">1983</option>
             <option value="1982">1982</option>
             <option value="1981">1981</option>
             <option value="1980">1980</option>
             <option value="1979">1979</option>
             <option value="1978">1978</option>
             <option value="1977">1977</option>
             <option value="1976">1976</option>
             <option value="1975">1975</option>
          </select>
       </div>
    </div>
`
    document.getElementById("user__educ__container").appendChild(div);
    console.log(div);
    nameNum++;
    console.log(nameNum);
    return nameNum;
  } else {
  }
});

document.getElementById("user__progs__btn__wrapper").addEventListener("click", function (e) {
  const id = e.target.id;
  const div = document.createElement('div');
  if (id == "addnew") {
    div.innerHTML = `                           
    <input type="text" class="user-text user__progs" value="" name="user__prog${nameNum}" id="user__prog${nameNum}">`
    document.getElementById("user__progs__wrapper").appendChild(div);
    console.log(div);
    nameNum++;
    console.log(nameNum);
    return nameNum;
  } else {
  }
});
const csrfmiddlewaretoken = document.getElementById('csrf-token').value;
function goUrl(){
  document.location.href = "ВСТАВЬ ССЫЛКУ ДЛЯ ПЕРЕХОДА";
}
function makeRequest(body) {
  const xhr = new XMLHttpRequest();
  xhr.open( 'POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', () => {
    if (xhr.status !== 404) {
      goUrl()
    } else{
      console.log('Got some err');
    }
  });
  xhr.addEventListener("error", () => {
    console.log("error");
  });
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8', "XSRF-TOKEN", csrfmiddlewaretoken);
  xhr.send(JSON.stringify(body));
}

// let user_gender;
// let user_degree = [];
// let user_busyness;
// let user_schedule;
// document.getElementById('gender__block__wrapper').addEventListener('click' , (e) => {
//   if (e.target.tagName == 'input' || 'label'){
//     user_gender = e.target.value;
//   }
// })
// document.getElementById('user__education__wrapper').addEventListener('click' , (e) => {
//   if (e.target.tagName == 'input' || 'label'){
//     user_degree.push(e.target.value)
//   }
// })
// document.getElementById('user__busyness__wrapper').addEventListener('click' , (e) => {
//   if (e.target.tagName == 'input' || 'label'){
//      user_busyness = e.target.value;
//   }
// })
// document.getElementById('user__schedule__wrapper').addEventListener('click' , (e) => {
//   if (e.target.tagName == 'input' || 'label'){
//      user_schedule = e.target.value;
//   }
// })
// document.getElementById('btn').addEventListener('click' , function(e) {
//   e.preventDefault();

//   function createArr(cls) {
//     let arrName = [];
//     let elemName = document.getElementsByClassName(cls);
//     if (elemName.length > 0) {
//        for (let i = 0; i < elemName.length; i++) {
//         arrName.push(elemName[i].value)
//        }
//     }
//     return arrName
//   }

//   const lang_arr = createArr('user-info-block__lang__item__txt');
//   const langlev_arr = createArr('user-info-block__lang__item__select');

//   const user_exp_pos_arr = createArr('user__txt__exp__pos');
//   const comp_name = createArr('user__last__comp__name__exp');
//   const user_exp_res = createArr('user__response__exp');
//   const user_exp_start_mon = createArr('user__time__start__mon__exp');
//   const user_exp_start_year = createArr('user__time__start__year__exp');
//   const user_exp_end_mon = createArr('user__time__end__mon__exp');
//   const user_exp_end_year = createArr('user__time__end__year__exp');
//   const user_exp_work_pres = createArr('work_pres');
//   const user_edu__instance = createArr('user__edu__instance');
//   const user_specialize = createArr('user__specialize');
//   const user_education_start = createArr('user__time__start__year__educ');
//   const user_education_end = createArr('user__time__end__year__exp');
//   const user_progs = createArr('user__progs');
//   let body = {
//     first_name:document.getElementById('user__name').value,
//     last_name:document.getElementById('user__surname').value,
//     birth_date:`${document.getElementById('user__bd__year').value}-${document.getElementById('user__bd__mon').value}-${document.getElementById('user__bd__date').value}`,
//     phone_number: document.getElementById('user__number').value,
//     email: document.getElementById('user__email').value,
//     registration:document.getElementById('user__registration').value,
//     gender:user_gender,
//     position:document.getElementById('user__position').value,
//     sphere:document.getElementById('user__industry').value,
//     min_salary:document.getElementById('user__salary').value,
//     busyness:user_busyness,
//     schedule:user_schedule,
//     work_exp:{
//       position:user_exp_pos_arr,
//       org_name:comp_name,
//       responsibilities:user_exp_res,
//       start_year:`${user_exp_start_year}-${user_exp_start_mon}-01`,
//       end_year:`${user_exp_end_year}-${user_exp_end_mon}-01` || user_exp_work_pres,
//     },
//     education: {
//       degree:user_degree,
//       establishment:user_edu__instance,
//       specialization :user_specialize,
//       start_year:user_education_start,
//       end_year:user_education_end,
//     },
//     progs: user_progs,
//     langs: {
//      lang:lang_arr,
//      lang_lev:langlev_arr,
//     },
//     about:document.getElementById('user__about').value
//   }
//   makeRequest(body);
//   console.log(body);
// });

const selectIndustry = document.getElementById('user__industry');
selectIndustry.addEventListener('change' , (e) => {
  let index =  selectIndustry.selectedIndex;
  console.log(index);
  if(index == 4) {
   selectIndustry.classList.add('disappear');
     const div = document.createElement('div');
     div.className = 'user-inp-blok';
     div.innerHTML = `<input required type="text" class="user-text" value="" placeholder="Другое" name="anotherIndustry" id="anotherIndustryId">`
     document.getElementById('industry__wrapper').appendChild(div);
  }
});

