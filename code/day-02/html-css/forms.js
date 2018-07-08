function onSave() {
  console.log('onSave() invoked.');
  //console.log(document.customerForm.cName.value);
  //console.log(document.getElementById('name').value);
  var obj = document.getElementById('name');
  obj.value = 'Boeing';
}