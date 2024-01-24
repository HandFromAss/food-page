function calculator() {
	//calc
	const result = document.querySelector('.calculating__result span');
	let weight, height, age, 
		male = 'female', 
		ratio = 1.375;
	calculatingChooseBtn('#gender');
	calculatingChooseBtn('.calculating__choose_big');
	calc(male, ratio);
	inputChoose();
	function inputChoose() {
		const input = document.querySelectorAll('.calculating__choose_medium input');
		input.forEach((el) => {
			el.addEventListener('input', (e) => {
				if (e.target.getAttribute('id') == 'height') {
					height = e.target.value;
				} else if(e.target.getAttribute('id') == 'weight') {
					weight = e.target.value;
				} else if (e.target.getAttribute('id') == 'age') {
					age = e.target.value;
				}
				calc(male, ratio);
			});
		});
	}
	function calc(male, ratio) {
		if (!weight || !height || !age || !male || !ratio) {
			result.textContent = '____';
			return;
		}
		if (male == 'male') {
			result.textContent = Math.round(ratio * (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)));
		} else {
			result.textContent = Math.round(ratio * (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)));
		}
	}
	function calculatingChooseBtn(element) {
		const div = document.querySelectorAll(`${element} div`);
		div.forEach((item) => {
			item.addEventListener('click', (e) => {
				div.forEach((el) => {
					el.classList.remove('calculating__choose-item_active');
				});
				e.target.classList.add('calculating__choose-item_active');
				if (e.target.getAttribute('data-ratio')) {
					ratio = +e.target.getAttribute('data-ratio');
				} else {
					male = e.target.getAttribute('data-mail');
				}
				calc(male, ratio);
			});
		});
	}
}

export default calculator;