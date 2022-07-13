const result_block = document.getElementById('result__vacancy__inner');
const get_value_btn = document.getElementById('refresh__btn__wrapper');
let count = 0;

get_value_btn.addEventListener("click", () => getResumes(() => createVacancy(res)));

function getResumes(cb) {
   let xhr = false;

   if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      xhr = new XMLHttpRequest();
   } else if (window.ActiveXObject) { // IE
       try {
         xhr = new ActiveXObject("Msxml2.XMLHTTP");
       } catch (e) {
           try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
           } catch (e) {}
       }
   }
 
   if (!xhr) {
       alert('got some err');
       return false;
   }
   xhr.open('GET' , `someurl${count}`);
   xhr.addEventListener('load' , () => {
      const response = JSON.parse(xhr.responseText);
      count += response.length;
      if (response.length == 0) {
         document.querySelector(`${get_value_btn} span`).textContent = 'Вы посмотрели все резюме'
         get_value_btn.removeChild('svg');
         get_value_btn.removeEventListener("click", () => getResumes(createVacancy(res)));
      } else {
         cb(res);
      }



      if(xhr.status !== 404){
         console.log(JSON.stringify(response));
      }
   });
   xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
   xhr.send()

   return count;
}
function createVacancy(res) {
   res.forEach( item => {
      const time = new Date(item.creation_date);
      const div = document.createElement('div');
      div.className = 'vacancy__card';
      div.innerHTML = `
      <div class="vac__card__inner">
         <div class="vac__heading">
            <h2 class="vac__heading__item">${item.position}</h2>
            <h2 class="vac__heading__item">${item.min_salary}</h2>
         </div>
         <div class="vac__heading">
            <h2 class="vac__heading__item">${time.getFullYear}${time.getMonth()}.${time.getDate}</h2>
            <svg width="26px" height="24px">
               <use xlink:href="#favorites__str" width="26px" height="24px" class="vac__ico"
                  data-link="${item.id}"></use>
            </svg>
         </div>
         <div class="vac__categories">
            <div class="vac__cat__item"">${item.sphere}</span>
            <div class="vac__cat__item" ">${item.registration}</span>
            <div class="vac__cat__item"">${item.busyness}</span>
            <div class="vac__cat__item"">От ${item.birth_date}</span>
            <div class="vac__cat__item"">${item.sex}</span>
            <div class="vac__cat__item"">${item.work_graph}</span>
         </div>

         <div class="vac__btns">
            <a href="${item.id}" class="vac__btns__item purp__btn" target="_blank">Подробнее</a>
            <a href="${item.id}" class="vac__btns__item green__btn" target="_blank">Получить контакты</a>
         </div>
      </div>`
      result_block.appendChild(div);
   });
};

