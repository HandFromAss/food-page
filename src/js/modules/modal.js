function modalWindow() {
	
	const buttonData = document.querySelectorAll('[data-modal]');
	const dataClose = document.querySelector('[data-close]');
	const modal = document.querySelector('.modal');

	const modelTimer = setTimeout(showModal, 15000);
	closeModal();

	function showModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidde';
		clearInterval(modelTimer); 
	}
	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	buttonData.forEach(btn => {
		btn.addEventListener('click', showModal);
	});
	

	dataClose.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if(e.target == modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code == 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			showModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

export default modalWindow;