const customers = [{
    "id": 1,
    "name": "John",
    "phone": "9988776655",
    "email": "john@abc.xyz",
    "city": "Bengaluru"
  },
  {
    "id": 2,
    "name": "Asif",
    "phone": "1122334455",
    "email": "asif@abc.xyz",
    "city": "Chennai"
  },
  {
    "id": 3,
    "name": "Hari",
    "phone": "3355776644",
    "email": "hari@abc.xyz",
    "city": "Mumbai"
  },
  {
    "id": 4,
    "name": "Amar",
    "phone": "2244668800",
    "email": "amar@abc.xyz",
    "city": "New Delhi"
  }
];

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

// Closure
function showCustomerList() {
  const divCustList = document.getElementById('divCustomerList');

  customers.forEach(generateCustomerDiv);

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
      </ul>
    `;

    divCustList.appendChild(divCustomer);
  }
}

function onSubmit() {
  console.log('form submitted.');
}

showCustomerList();

// showCustomer(customer);