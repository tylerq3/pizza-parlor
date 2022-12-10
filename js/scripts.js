// Business Logic

class Pizza{
  constructor() {
    this.price = 0;
    this.toppings = [];
    this.sizes = [new Size('Tiny'), new Size('Average'), new Size('Huge')];;
  }
}

function prices() {
  Pizza.toppings = .50;
  const tiny = Pizza.sizes[0];
  const average = Pizza.sizes[1];
  const huge = Pizza.sizes[2];
  tiny = 5.00;
  average = 10.00;
  huge = 20.00;
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