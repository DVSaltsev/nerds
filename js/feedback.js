
const feedbackLink = document.querySelector(".footer__contacts-button");
const feedbackPopup = document.querySelector(".feedback")

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add('feedback--show');
});
