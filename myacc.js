"use strict";
const accLinks = document.querySelectorAll(".acc-link");
const personalDesc = document.querySelector(".personal-desc");
const passworDesc = document.querySelector(".password-desc");
const contactDesc = document.querySelector(".contact-desc");
const languageDesc = document.querySelector(".language-desc");

accLinks.forEach(function (accLink) {
  accLink.addEventListener("click", function (e) {
    const accId = e.target.dataset.id;
    if (accId == "personal") {
      passworDesc.classList.add("d-none");
      contactDesc.classList.add("d-none");
      languageDesc.classList.add("d-none");
      personalDesc.classList.remove("d-none");
    } else if (accId == "password") {
      personalDesc.classList.add("d-none");
      contactDesc.classList.add("d-none");
      languageDesc.classList.add("d-none");
      passworDesc.classList.remove("d-none");
    } else if (accId == "contact") {
      personalDesc.classList.add("d-none");
      passworDesc.classList.add("d-none");
      languageDesc.classList.add("d-none");
      contactDesc.classList.remove("d-none");
    } else if (accId == "language") {
      personalDesc.classList.add("d-none");
      passworDesc.classList.add("d-none");
      contactDesc.classList.add("d-none");
      languageDesc.classList.remove("d-none");
    }
  });
});
