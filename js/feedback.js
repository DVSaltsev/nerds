
const feedbackLink = document.querySelector(".footer__contacts-button");
const feedbackPopup = document.querySelector(".feedback");
const feedbackClose = feedbackPopup.querySelector(".close");
const feedbackLogin = feedbackPopup.querySelektor(".feedback__name-input");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('feedback--show');
  // feedbackLogin.focus();
})
feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove('feedback--show');

})