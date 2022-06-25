let nameNum = 1;
document.getElementById("user__time__btn__wrap").addEventListener("click", function (e) {
  const id = e.target.id;
  const div = document.createElement('div');
  div.className = 'user__time';
  if (id == "addnew") {
    div.innerHTML = `<h2>Начало работы</h2>
    <select name="user__time__start__mon${nameNum}" id="" class="user__time__item user-select-bg">
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
  
    <select name="user__time__start__year${nameNum}" id="" class="user__time__item user-select-bg">
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
    <select name="user__time__end__mon${nameNum}" id="" class="user__time__item user-select-bg">
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
  
    <select name="user__time__end__year${nameNum}" id="" class="user__time__item user-select-bg">
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
      <input type="checkbox" class="user__time__checkbox" id="user__t__chk${nameNum}" name="user__time__checkbox${nameNum}">
      <label for="user__t__chk${nameNum}" class="user__time__checkbox__label" >Работаю по настоящеевремя</label>
    </div>`
    document.getElementById("user__time__wrap").appendChild(div);
    console.log(div);
    nameNum++;
    console.log(nameNum);
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
      <div class="user-info-block-subtitle">
        <div>Язык</div>
        <div>Уровень владения</div>
      </div>

      <div class="user-info-block__lang__item">
        <input type="text" class="user-info-block__lang__item__txt" name="lang${nameNum}"
        placeholder="Туркменский">
        <select name="lang__lev${nameNum}" id="" class="">
          <option value="ll1">Базовый</option>
          <option value="ll1">Продвинутый</option>
          <option value="ll1">Говорю свободно</option>
          <option value="ll1">В совершенстве</option>
          <option value="ll1">Профильный</option>
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
    <div class="user__exp__block">
       <input required type="radio" id="educ1" value="educ1" name="user__edu${nameNum}">
       <label for="educ1" class="user__exp__item">среднее</label>
       <input required type="radio" id="educ2" value="educ2" name="user__edu${nameNum}">
       <label for="educ2" class="user__exp__item">средне-специальное</label>
       <input required type="radio" id="educ3" value="educ3" name="user__edu${nameNum}">
       <label for="educ3" class="user__exp__item">неоконченное высшее</label>
       <input required type="radio" id="educ4" value="educ4" name="user__edu${nameNum}">
       <label for="educ4" class="user__exp__item">высшее</label>
       <input required type="radio" id="educ5" value="educ4" name="user__edu${nameNum}">
       <label for="educ5" class="user__exp__item">высшее</label>
       <input required type="radio" id="educ6" value="educ5" name="user__edu${nameNum}">
       <label for="educ6" class="user__exp__item">магистр</label>
       <input required type="radio" id="educ7" value="educ6" name="user__edu${nameNum}">
       <label for="educ7" class="user__exp__item">кандидат наук</label>
       <input required type="radio" id="educ8" value="educ7" name="user__edu"${nameNum}>
       <label for="educ8" class="user__exp__item">доктор наук</label>
    </div>


    <h2>Учебное заведение</h2>
    <input type="text" class="user-text" value="" name="user__last__edu__inst">




    <h2>Факультет</h2>
    <input type="text" class="user-text" value="" name="user__last__faculty">



    <h2>Специализация</h2>
    <input type="text" class="user-text" value="" name="user__last__spec">



    <div class="user__time">
       <div class="user__titles">
          <h2>Год начала</h2>
          <h2>Год окончания</h2>
       </div>
       <div class="user__time__inner">
          <select name="user__time__educ__end__year${nameNum}" id="" class="user__time__item user-select-bg">
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


          <select name="user__time__educ__end__year${nameNum}" id="" class="user__time__item user-select-bg">
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