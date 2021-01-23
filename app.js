var textInput = document.querySelector("#txt-Input");
var btnTranslate = document.querySelector("#btn-Translate");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var input = textInput.value;

  var birthDate = new Date(input);
  var birthDateDay = birthDate.getDate();
  var birthDateMonth = birthDate.getMonth();
  var birthDateYear = birthDate.getFullYear();
  var newDate = new Date();

  var newDay = newDate.getDate();
  var newMonth = newDate.getMonth();
  var newYear = newDate.getFullYear();

  if (newMonth > birthDateMonth) {
    age = newYear - birthDateYear;
  } else if (newMonth == birthDateMonth) {
    if (newDay >= birthDateDay) {
      age = newYear - birthDateYear;
    } else {
      age = newYear - birthDateYear - 1;
    }
  } else {
    age = newYear - birthDateYear - 1;
  }
  outputDiv.innerText = age;
}
btnTranslate.addEventListener("click", clickHandler);
