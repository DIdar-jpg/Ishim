function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open(`POST`, `ВСТАВЬ ССЫЛКУ`);

  xhr.addEventListener("error", () => {
    console.log("error");
  });
  xhr.send(JSON.stringify());
}
document.getElementById("fav__btn__wrapper").addEventListener("click", function (e) {
  const tagName = e.target.tagName;
  if (tagName == "use") {
    if (e.target.classList.contains("vac__ico")) {
      e.target.classList.remove("vac__ico");
      e.target.classList.add("vac__ico__selected");
      makeRequest();
    } else {
      e.target.classList.remove("vac__ico__selected");
      e.target.classList.add("vac__ico");
    }
  }
});

