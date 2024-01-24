import calc from './modules/calc';
import cards from './modules/cards';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import forms from './modules/form';
window.addEventListener('DOMContentLoaded', () => {
	tabs(); 
	modal();
	timer();
	slider();
	cards();
	calc();
	forms();
});