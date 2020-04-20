'use strict';
const body = document.querySelector('body');
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const generetColors = () => {
  const randomIdx = randomIntegerFromInterval(0, Number(colors.length - 1));
  body.style.backgroundColor = colors[randomIdx];
};
let isActive = false;
const handlerStart = () => {
  if (isActive) {
    return;
  }
  isActive = true;
  const startInterval = setInterval(() => {
    generetColors();
  }, 1000);
  const handlerStop = () => {
    isActive = false;
    clearInterval(startInterval);
  };
  stop.addEventListener('click', handlerStop);
};

start.addEventListener('click', handlerStart);
