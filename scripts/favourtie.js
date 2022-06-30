function makeRequest(url) {
  const xhr = new XMLHttpRequest();
  xhr.open(`POST`, `${url}`);

  xhr.addEventListener("error", () => {
    console.log("error");
  });
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8', "XSRF-TOKEN", csrfmiddlewaretoken);
  xhr.send(JSON.stringify());
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

