// Business Logic

class Pizza{
  constructor() {
    this.price = 0;
    this.toppings = [];
    this.sizes = sizes;
  }
}

function pricing(){
const size = document.querySelector('input#size:checked').value; 
let toppings = Pizza.toppings.document.querySelector('input#toppings:checked').value
	let sizePrice = 0;
  let toppingPrice = 0;
	if (size === "tiny") {
		sizePrice = 8;
	};
	if (size === "average") {
		sizePrice = 19;
	};
	if (size === "huge") {
		sizePrice = 29;
	}; 
  if (toppings) {
    toppingPrice = 1;
  }
}



// User Interface Logic

function startPageHandler() {
event.preventDefault();
document.getElementById('intro').classList.add('hidden');
document.getElementById('order-page').classList.remove('hidden');
}

function orderPageHandler() {
  event.preventDefault();
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('success-page').classList.remove('hidden');
  document.getElementById('order-page').classList.add('hidden');
}

function successPageHandler() {
  event.preventDefault();
  document.getElementById('order-page').classList.add('hidden');
  document.getElementById('intro').classList.remove('hidden');
  document.getElementById('success-page').classList.add('hidden');
  console.log('it worked')
}


window.onload = function () {
  const goButton = document.getElementById('go');
  goButton.addEventListener("click", startPageHandler);

  const orderButton = document.getElementById('order');
  orderButton.addEventListener("click", orderPageHandler);

  const againButton = document.getElementById('again');
  againButton.addEventListener("click", successPageHandler);
}