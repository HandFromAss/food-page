function sliders() {
	let slideIndex = 1;
	const slides = document.querySelectorAll('.offer__slide');
	const prev = document.querySelector('.offer__slider-prev');
	const next = document.querySelector('.offer__slider-next');
	const current = document.querySelector('#current');
	const total = document.querySelector('#total');
	const slidesWrapper = document.querySelector('.offer__slider-wrapper');
	const slidesFilde = document.querySelector('.offer__slider-inner');
	const width = window.getComputedStyle(slidesWrapper).width;
	let offset = 0;
	//slider v2
	slidesFilde.style.width = slides.length * 100 + '%';
	slidesFilde.style.display = 'flex';
	slidesWrapper.style.overflow = 'hidden';
	slidesFilde.style.transition = '0.5s all';
	if (slides.length > 10) {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	} else {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	}
	next.addEventListener('click', () => {
		if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.replace(/\D/g, '');
		}
		slidesFilde.style.transform = `translateX(-${offset}px)`;
		++slideIndex;
		if (slideIndex > slides.length) {
			slideIndex = 1;
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = `0${slideIndex}`;
		}
	});
	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = +width.replace(/\D/g, '') * (slides.length - 1);
		} else {
			offset -= +width.replace(/\D/g, '');
		}
		slidesFilde.style.transform = `translateX(-${offset}px)`;
		--slideIndex;
		if (slideIndex < 1) {
			slideIndex = slides.length;
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = `0${slideIndex}`;
		}
	});

	//slider v1
	// updateSlide(slideIndex);
	// if (slides.length >= 10) {
	// 	total.textContent = slides.length;
	// } else {
	// 	total.textContent = `0${slides.length}`;
	// }
	// function updateSlide(n) {
	// 	if (n > slides.length) {
	// 		slideIndex = 1;
	// 	}
	// 	if (n < 1) {
	// 		slideIndex = slides.length;
	// 	}
	// 	slides.forEach(item => {
	// 		item.classList.add('hide');
	// 	});
	// 	slides[slideIndex - 1].classList.remove('hide');
	// 	if (slides.length >= 10) {
	// 		current.textContent = slideIndex;
	// 	} else {
	// 		current.textContent = `0${slideIndex}`;
	// 	}
	// }
	// function updateIndexslide(n) {
	// 	updateSlide(slideIndex += n);
	// }
	// prev.addEventListener('click', () => {
	// 	updateIndexslide(-1);
	// });
	// next.addEventListener('click', () => {
	// 	updateIndexslide(1);
	// });
}

export default sliders;