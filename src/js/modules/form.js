import axios from 'axios';
function forms() {
		//Form

		const form = document.querySelectorAll('form');

		form.forEach(e => {
			bindFormPost(e);
		});
	
		function bindFormPost(form) {
			form.addEventListener('submit', (e) => {
				e.preventDefault();
				const formData = new FormData(form);
				const json = JSON.stringify(Object.fromEntries(formData.entries()));
				axios.post('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
				}).catch(() => {
					console.log('error');
				}).finally(() => {
					form.reset();
				});
			});
		}
}

export default forms;