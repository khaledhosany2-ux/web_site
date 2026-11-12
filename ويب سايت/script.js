var url = "https://script.google.com/macros/s/AKfycbxFC_vFuhXijjfG6aFu3QgXbAuQ-0swSGixep5aXOtCc8IKmXpL-A928hJhc-z4Z-yC/exec";
var form = document.getElementById("form");
var msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.innerHTML = "جاري الارسال...";

  fetch(url, {
    method: "POST",
    body: new FormData(form),
    mode: "no-cors"
  })
    .then(function () {
      msg.innerHTML = "تم الارسال بنجاح";
      form.reset();
    })
    .catch(function () {
      msg.innerHTML = "حصل خطأ، حاول تاني";
    });
});