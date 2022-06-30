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

}
document.getElementById("fav__btn__wrapper").addEventListener("click", function (e) {
  const tagName = e.target.tagName;
  if (tagName == "use") {
    if (e.target.classList.contains("vac__ico")) {
      e.target.classList.remove("vac__ico");
      e.target.classList.add("vac__ico__selected");
      const url = e.target.getAttribute("data-link");
      makeRequest(url);
    } else {
      e.target.classList.remove("vac__ico__selected");
      e.target.classList.add("vac__ico");
      const url = e.target.getAttribute("data-link");
      makeRequest(url);
    }
  }
});

