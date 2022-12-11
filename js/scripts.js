// Business Logic

class Order{
  constructor() {
    this.price = 0;
    this.pizzas = [];
  }
}

Order.addPizza = function Pizza() {
  this.pizzas.push(pizza);
}



function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

function pricing() {
const size = document.querySelector('input#size:checked').value; 
let toppings = document.querySelector('input#toppings:checked').value
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
  return toppingPrice + sizePrice;
}



// User Interface Logic

function addPizza() {
  event.preventDefault();
  let toppings = document.getElementById('input#toppings:checked').value
  let pizzaSize = document.getElementById("sizing").value;
  let selectedToppings = [toppings];
  let pizza = new Pizza(pizzaSize, selectedToppings);
  pricing();
  let p = document.createElement("p");
  pizza.append(p);

}

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
  addPizza();
}

function successPageHandler() {
  event.preventDefault();
  document.getElementById('order-page').classList.add('hidden');
  document.getElementById('intro').classList.remove('hidden');
  document.getElementById('success-page').classList.add('hidden');
  console.log(addPizza());
}


window.onload = function () {
  const goButton = document.getElementById('go');
  goButton.addEventListener("click", startPageHandler);

  const orderButton = document.getElementById('order');
  orderButton.addEventListener("click", orderPageHandler);

  const againButton = document.getElementById('again');
  againButton.addEventListener("click", successPageHandler);
}