'use strict';
(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var pageBody = document.querySelector('.page-body');
  var headerLinks = pageHeader.querySelectorAll('.header-nav__item-link');

  var headerForm = document.querySelector('.form');
  var headerFormButton = headerForm.querySelector('.form__submit');

  var headerFormNameLabel = headerForm.querySelector('.form__label--name');
  var headerFormNameInput = headerFormNameLabel.querySelector('.form__control');

  var headerFormPhoneLabel = headerForm.querySelector('.form__label--tel');
  var headerFormPhoneInput = headerFormPhoneLabel.querySelector('.form__control');

  var myStorage = window.localStorage;

  pageHeader.classList.remove('page-header--nojs');
  pageHeader.classList.add('page-header--closed');

  function menuOpen() {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
    pageBody.style.height = '100vh';
    pageBody.style.overflowY = 'hidden';
  }

  function menuClose() {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    pageBody.style.height = '';
    pageBody.style.overflowY = '';
  }

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      menuOpen();
    } else {
      menuClose();
    }
  });

  headerLinks.forEach(function (item) {
    item.addEventListener('click', menuClose);
  });

  function submitHandler(evt) {
    myStorage.setItem('name', headerFormNameInput.value);
    myStorage.setItem('phone', headerFormPhoneInput.value);
  }

  headerFormButton.addEventListener('click', submitHandler);
}());
