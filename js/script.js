'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var pageBody = document.querySelector('.page-body');
var headerLinks = pageHeader.querySelectorAll('.header-nav__item-link');

pageHeader.classList.remove('page-header--nojs');
pageHeader.classList.add('page-header--closed');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
    pageBody.style.height = '100vh';
    pageBody.style.overflowY = 'hidden';
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    pageBody.style.height = '';
    pageBody.style.overflowY = '';
  }
});

headerLinks.forEach((item) => {
  item.addEventListener('click', function () {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    pageBody.style.height = '';
    pageBody.style.overflowY = '';
  });
});
