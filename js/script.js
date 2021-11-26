'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var pageBody = document.querySelector('.page-body');
var overlay = document.querySelector('.page-body');

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
