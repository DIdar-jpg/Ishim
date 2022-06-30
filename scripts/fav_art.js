// function makeRequest(url) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(`POST`, `https://jsonplaceholder.typicode.com/posts`);

//   xhr.addEventListener("error", () => {
//     console.log("error");
//   });
//   xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
//   xhr.send(JSON.stringify());
//   if(httpRequest.status !== 404){
//   console.log(JSON.stringify(body));
//   }
// }

function makeRequest(url) {
  let httpRequest = false;

  if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE
      try {
          httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
          try {
              httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
      }
  }

  if (!httpRequest) {
      alert('got some err ');
      return false;
  }
  console.log(httpRequest);
  httpRequest.open('GET', url, true);
  httpRequest.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  httpRequest.send();
  if(httpRequest.status !== 404){
    console.log(JSON.stringify(body));
  }

}

document.getElementById("article__btn__wrapper").addEventListener("click", function (e) {
   const tagName = e.target.tagName;
   if (tagName == "use" && e.target.id == "bookmarkbtn") {

     if (e.target.classList.contains("vac__ico")) {
       e.target.classList.remove("vac__ico");
       e.target.classList.add("vac__ico__selected__purp");
       const url = e.target.getAttribute("data-link");
       makeRequest(url);
     } else {
       e.target.classList.remove("vac__ico__selected__purp");
       e.target.classList.add("vac__ico");
       const url = e.target.getAttribute("data-link");
       makeRequest(url);
     }
   }
 });
 document.getElementById("article__btn__wrapper").addEventListener("click", function (e) {
  const id = e.target.id;
  if (id == "share") {
    const shareUrl = e.target.getAttribute("data-copy-link");
    console.log(shareUrl); 
    navigator.clipboard.writeText(shareUrl)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
  }
});
 