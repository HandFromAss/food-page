import axios from 'axios';
function carts() {
	const cartContainer = document.querySelector('[data-cartContainer]');
	cartContainer.innerHTML = '';
	class CartMenu {
		constructor(title, disc, price, img) {
			this.title = title;
			this.disc = disc;
			this.price = price;
			this.img = img;
		}
		createCart() {
			cartContainer.innerHTML += `
			<div class="menu__item">
				<img src=${this.img} alt="vegy">
				<h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
				<div class="menu__item-descr">Меню "${this.title}" ${this.disc}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			</div>`;
		}
	}
	axios.get('http://localhost:3000/menu')
		.then(data => {
			data.data.forEach(({img, title, descr, price}) => {
				new CartMenu(title, descr, price, img).createCart();
			});
		});
}

export default carts;