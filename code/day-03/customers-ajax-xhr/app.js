const divCustList = document.getElementById('divCustomerList');
const customerForm = document.querySelector('#customerForm');
customerForm.addEventListener('submit', onSubmit);

const apiUrl = 'http://localhost:3000/customers';

let customers = [];

function showCustomer(customer) {
  // document.getElementById('lblName');
  var lblName = document.querySelector('#lblName');
  var lblPhone = document.querySelector('#lblPhone');
  var lblEmail = document.querySelector('#lblEmail');
  var lblCity = document.querySelector('#lblCity');

  lblName.textContent = customer.name;
  lblPhone.textContent = customer.phone;
  lblEmail.textContent = customer.email;
  lblCity.textContent = customer.city;
}

function showCustomerList() {
  customers.forEach(generateCustomerDiv);
}

function generateCustomerDiv(c) {
  const divCustomer = document.createElement('div');
  divCustomer.classList.add('card');
  divCustomer.classList.add('mb-3');

  // Older way of creating strings
  // divCustomer.innerHTML =
  //   '<div class="card-header"><label id="lblName">' + c.name + '</label></div>' +
  //   '<ul class="list-group list-group-flush">' +
  //   '<li class="list-group-item">Phone: <label id="lblPhone">' + c.phone + '</label></li>' +
  //   '<li class="list-group-item">Email: <label id="lblEmail">' + c.email + '</label></li>' +
  //   '<li class="list-group-item">City: <label id="lblCity">' + c.city + '</label></li>' +
  //   '</ul>';

  // Template literal syntax - ES6
  divCustomer.innerHTML = `
    <div class="card-header">
      <label id="lblName">${c.name}</label>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Phone: <label id="lblPhone">${c.phone}</label></li>
      <li class="list-group-item">Email: <label id="lblEmail">${c.email}</label></li>
      <li class="list-group-item">City: <label id="lblCity">${c.city}</label></li>
    </ul>`;

  divCustList.appendChild(divCustomer);
}

function onSubmit(e) {
  e.preventDefault();

  const c = {
    name: document.querySelector('#txtName').value,
    phone: document.querySelector('#txtPhone').value,
    email: document.querySelector('#txtEmail').value,
    city: document.querySelector('#txtCity').value
  };

  console.log('new customer:', c);

  addCustomer(c);


}

function addCustomer(c) {
  const req = new XMLHttpRequest();
  req.onload = addSuccess;
  req.onerror = addError;
  req.open('POST', apiUrl, true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(c));
  console.log('Request to server sent!');
}

function addSuccess() {
  console.log(`response received, status: ${this.status}`);
  if (this.status >= 200 && this.status < 400) {
    const c = JSON.parse(this.responseText);
    customers.push(c);
    generateCustomerDiv(c);
  } else {
    console.log('no data found!');
  }
}

function addError(e) {
  console.log('error: ', e);
}

function getCustomers() {
  const req = new XMLHttpRequest();
  req.onload = getSuccess;
  req.onerror = getError;
  req.open('GET', apiUrl, true);
  req.send();
  console.log('Request to server sent!');
}

function getSuccess() {
  console.log(`response received, status: ${this.status}`);
  if (this.status >= 200 && this.status < 400) {
    customers = JSON.parse(this.responseText);
    showCustomerList();
  } else {
    console.log('no data found!');
  }
}

function getError(e) {
  console.log('error: ', e);
}

getCustomers();