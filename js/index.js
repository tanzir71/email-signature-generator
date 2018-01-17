var textName = $('#textName');
var textTitle = $('#textTitle');
var textOffice = $('#textOffice');
var textEmail = $('#textEmail');
var textPhone = $('#textPhone');
var textWeb = $('#textWeb');

$('#nameInput').on('input',function(e){
  var nameInput = $('#nameInput').val();
  textName.text(nameInput);
});

$('#titleInput').on('input',function(e){
  var titleInput = $('#titleInput').val();
  textTitle.text(titleInput);
});

$('#officeInput').on('input',function(e){
  var officeInput = $('#officeInput').val();
  textOffice.text(officeInput);
});

$('#emailInput').on('input',function(e){
  var emailInput = $('#emailInput').val();
  textEmail.text(emailInput);
  textEmail.attr("href", "mailto:"+emailInput);
});

$('#phoneInput').on('input',function(e){
  var phoneInput = $('#phoneInput').val();
  textPhone.text(phoneInput);
});

$('#webInput').on('input',function(e){
  var webInput = $('#webInput').val();
  textWeb.text(webInput);
  textWeb.attr("href", "http://"+webInput);
});