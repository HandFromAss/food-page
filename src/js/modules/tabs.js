function tabs() {
	const textTab = document.querySelectorAll('.tabheader__item');
	const tabContainer = document.querySelectorAll('.tabcontent');

	hidenTabs();
	showTab();

	textTab.forEach((t, i) => {
		t.addEventListener('click', () => {
			hidenTabs();
			showTab(i);
		});
	});

	function hidenTabs() {
		tabContainer.forEach(tab => {
			tab.classList.add('hide');
		});
		textTab.forEach(t => {
			t.classList.remove('tabheader__item_active');
		});
	}
	
	function showTab(i = 0) {
		tabContainer[i].classList.remove('hide');
		textTab[i].classList.add('tabheader__item_active');
	}
}

export default tabs;