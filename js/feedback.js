
const feedbackLink = document.querySelector(".footer__contacts-button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackClose = feedbackPopup.querySelector(".close");
const feedbackName = feedbackPopup.querySeleсtor(".feedback__name-input");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('feedback--show');
  // feedbackLogin.focus();
})
feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('feedback--show');

})