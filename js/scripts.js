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



function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.pricing = function () {
	let sizePrice = 0;
  let toppingPrice = 0;
	if (this.size === "tiny") {
		sizePrice = 8;
	};
	if (this.size === "average") {
		sizePrice = 19;
	};
	if (this.size === "huge") {
		sizePrice = 29;
	}; 
  if (this.toppings.length >= 1) {
    toppingPrice = 1;
  }
  this.price = sizePrice + toppingPrice;
}



// User Interface Logic

window.onload = function () {
  const goButton = document.getElementById('go');
  goButton.addEventListener("click", startPageHandler);

  const orderButton = document.getElementById('order');
  orderButton.addEventListener("click", orderPageHandler);

  const againButton = document.getElementById('again');
  againButton.addEventListener("click", successPageHandler);

  const displayOrder = document.getElementById('display-order');


function addPizza() {
  event.preventDefault();
  let toppingsArray = []
  document.querySelectorAll("input[name=toppings]:checked").forEach(function(element)   {
  let topping = element.value; 
  console.log(topping)
  toppingsArray.push(topping);
});
  let pizzaSize = document.querySelector('input[name=sizebtn]:checked').value;
  let pizza = new Pizza(pizzaSize, toppingsArray);
  pizza.pricing();
  displayOrder.innerText = `Your total is $${pizza.price}`; 
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
  
}

}
