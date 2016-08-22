'use strict';

/**
 * показывает/скрывает элемент
 * @param {object} elem элемент
 * @param {boolean} show флаг видимости
 */
function toggle(elem, show) {
  elem.classList.toggle('invisible', !show);
}

/**
 * возвращает количество дней с заданной даты
 * @param {date} date дата отсчета
 * @returns {number}
 */
function getDaysFromDate(date) {
  var today = new Date();
  var MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

  if (today < date) {
    date.setFullYear(today.getFullYear() - 1);
  }

  return Math.floor((today - date) / MILLISECONDS_IN_DAY);
}

/**
 * callback выполняет код в зависимости от условия
 * @callback execByCondition
 * @param {boolean} isOk условие выполнения
 */

/**
 * загружает изображения
 * @param {string} url адрес изображения
 * @param {execByCondition} callback выполнение по условию
 */
function loadImage(url, cb) {
  var image = new Image();
  var imageTimeout = null;
  var IMAGE_LOAD_TIMEOUT = 10000;

  image.onload = function() {
    clearTimeout(imageTimeout);
    cb(true);
  };

  image.onerror = function() {
    clearTimeout(imageTimeout);
    cb(false);
  };

  image.src = url;

  imageTimeout = setTimeout(function() {
    cb(false);
  }, IMAGE_LOAD_TIMEOUT);
}

module.exports = {
  toggle: toggle,
  getDaysFromDate: getDaysFromDate,
  loadImage: loadImage
};