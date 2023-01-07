import { default as Choices } from "choices.js";

const elementTop = document.querySelector('.header-top__select');
const choices = new Choices(elementTop, {
  searchEnabled: false,
  searchChoices: false,
  itemSelectText: '',
  position: 'bottom',
});

const elementBottom = document.querySelector('.header-bot__select');
const choices2 = new Choices(elementBottom, {
  searchEnabled: false,
  searchChoices: false,
  itemSelectText: '',
  position: 'bottom',
});
