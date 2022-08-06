var elForm = document.querySelector(".site-form");
var elInput = document.querySelector(".site-input");
var elText = document.querySelector(".text");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  if (isNaN(elInput.value)) {
    elText.textContent = 'iltimos son kiriting';
  } else if (elInput.value == 0) {
    elText.textContent = 'iltimos 0 dan katta yosh kiriting';
  } else if (elInput.value > 150) {
    elText.textContent = 'iltimos togri yoshingizni kiriting';
  } else if (elInput.value > 60) {
    elText.textContent = 'joylashishingiz mumkin sizga chipta bepul';
  } else if (elInput.value > 25) {
    elText.textContent = 'sizning chiptangiz narxi odatiy';
  } else if (elInput.value > 12) {
    elText.textContent = 'sizning chiptangiz narxi arzonlashtirilgan';
  } else if (elInput.value > 0) {
    elText.textContent = 'sizning bepul';
  }
})
