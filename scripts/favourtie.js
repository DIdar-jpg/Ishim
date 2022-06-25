function makeRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open(`POST`, `ВСТАВЬ ССЫЛКУ`);
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });
  xhr.send(JSON.stringify(body));
}
document.getElementById("fav__wrapper").addEventListener("click", function (e) {
  const tagName = e.target.tagName;
  if (tagName == "use") {
    if (e.target.classList.contains("vac__ico")) {
      e.target.classList.remove("vac__ico");
      e.target.classList.add("vac__ico__selected");
    } else {
      e.target.classList.remove("vac__ico__selected");
      e.target.classList.add("vac__ico");
    }
  }
});

