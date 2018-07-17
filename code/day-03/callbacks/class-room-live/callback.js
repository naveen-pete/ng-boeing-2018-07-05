// Banking
// 1. Withdraw Rs. 5000/-
// 2. Apply for a home loan
// 3. Print my passbook

function doTasks() {
  withdraw(5000, success);
  applyLoan();
}

function print(amount) {
  console.log('print passbook: amount:', amount); // 5 min
}

function applyLoan() {
  console.log('apply for loan'); // 5 min
}

// ---------------------------------------------
// Callback pattern #1
// Two callback functions, one for success and
// one for failed
function withdraw(amount, cbSuccess, cbFailed) {
  console.log('withdraw money - begin');
  if (typeof amount !== 'number') {
    cbFailed('amount should be numeric value');
  }

  setTimeout(function () {
    console.log('withdraw money - end');
    cbSuccess(amount);
  }, 3000);
}

function success(amount) {
  console.log('withdraw successful:', amount);
  print(amount);
}

function failed(msg) {
  console.log('Withdraw failed:', msg);
}

// ---------------------------------------------
// Callback pattern #2
// One callback function, handles both success and failure
function withdrawAlt(amount, cb) {
  console.log('withdraw money - begin');
  if (typeof amount !== 'number') {
    return cb('amount should be numeric value');
  }

  setTimeout(function () {
    console.log('withdraw money - end');
    cb(null, amount);
  }, 3000);
}

function finished(err, amount) {
  if (err) {
    console.log('Withdraw failed:', err);
    return;
  }

  console.log('withdraw successful:', amount);
}

// ---------------------------------------------
// doTasks();

// Pattern #1 call
// withdraw('5000', success, failed);

// Pattern #2 call
withdrawAlt('500', finished);