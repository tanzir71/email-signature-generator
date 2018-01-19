var textName = $('#textName');
var textTitle = $('#textTitle');
var textOffice = $('#textOffice');
var textEmail = $('#textEmail');
var textPhone = $('#textPhone');
var textWeb = $('#textWeb');
var textFB = $('#textFB');
var textTweet = $('#textTweet');
var textLinkedIn = $('#textLinkedIn');
var textInsta = $('#textInsta');
var textSkype = $('#textSkype');
var textPin = $('#textPin');
var textYT = $('#textYT');
var textOtherWeb = $('#textOtherWeb');

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
  var secureWeb = $('#secureWeb').val();
  textWeb.attr("href", secureWeb+webInput);
  webInput.includes("http") && swal("Don't include HTTP.","Select it from the drop-down.", "warning");
});

$('#secureWeb').change(function(e){
  var webInput = $('#webInput').val();
  var secureWeb = $('#secureWeb').val();
  textWeb.attr("href", secureWeb+webInput);
});

$('#fbInput').on('input',function(e){
  var fbInput = $('#fbInput').val();
  textFB.attr("href", fbInput);
  if(fbInput.length > 5 && fbInput.includes("http") !== true) { swal("Include HTTPS.","Start your URL with https://", "warning"); }
  if(fbInput == "x") { document.getElementById("hidefb").style.display = 'none'; }
  else {document.getElementById("hidefb").style.display = 'inline-block'; }
});

$('#tweetInput').on('input',function(e){
  var tweetInput = $('#tweetInput').val();
  textTweet.attr("href", tweetInput);
  if(tweetInput.length > 10 && tweetInput.includes("http") !== true) { swal("Include HTTPS.","Start your URL with https://", "warning"); }
  if(tweetInput == "x") { document.getElementById("hidetweet").style.display = 'none'; }
  else {document.getElementById("hidetweet").style.display = 'inline-block'; }
});

$('#linkedinInput').on('input',function(e){
  var linkedinInput = $('#linkedinInput').val();
  textLinkedIn.attr("href", linkedinInput);
  if(linkedinInput.length > 10 && linkedinInput.includes("http") !== true) { swal("Include HTTPS.","Start your URL with https://", "warning"); }
  if(linkedinInput == "x") { document.getElementById("hidelinkedin").style.display = 'none'; }
  else {document.getElementById("hidelinkedin").style.display = 'inline-block'; }
});

$('#instaInput').on('input',function(e){
  var instaInput = $('#instaInput').val();
  textInsta.attr("href", instaInput);
  if(instaInput.length > 10 && instaInput.includes("http") !== true) { swal("Include HTTPS.","Start your URL with https://", "warning"); }
  if(instaInput == "x") { document.getElementById("hideinsta").style.display = 'none'; }
  else {document.getElementById("hideinsta").style.display = 'inline-block'; }
});

$('#skypeInput').on('input',function(e){
  var skypeInput = $('#skypeInput').val();
  textSkype.attr("href", skypeInput);
  // if(skypeInput.length > 10 && skypeInput.includes("http") !== true) { swal("Include HTTPS.","Start your URL with https://", "warning"); }
  if(skypeInput == "x") { document.getElementById("hideskype").style.display = 'none'; }
  else {document.getElementById("hideskype").style.display = 'inline-block'; }
});

$('#pinInput').on('input',function(e){
  var pinInput = $('#pinInput').val();
  textPin.attr("href", pinInput);
  if(pinInput.length > 10 && pinInput.includes("http") !== true) { swal("Include HTTPS.","Start your URL with https://", "warning"); }
  if(pinInput == "x") { document.getElementById("hidepin").style.display = 'none'; }
  else {document.getElementById("hidepin").style.display = 'inline-block'; }
});

$('#ytInput').on('input',function(e){
  var ytInput = $('#ytInput').val();
  textYT.attr("href", ytInput);
  if(ytInput.length > 10 && ytInput.includes("http") !== true) { swal("Include HTTPS.","Start your URL with https://", "warning"); }
  if(ytInput == "x") { document.getElementById("hideyt").style.display = 'none'; }
  else {document.getElementById("hideyt").style.display = 'inline-block'; }
});


$('#otherInput').on('input',function(e){
  var otherInput = $('#otherInput').val();
  textOtherWeb.attr("href", otherInput);
  if(otherInput.length > 10 && otherInput.includes("http") !== true) { swal("Include HTTP.","Start your URL with http://", "warning"); }
  if(otherInput == "x") { document.getElementById("hideotherweb").style.display = 'none'; }
  else {document.getElementById("hideotherweb").style.display = 'inline-block'; }
});

$('#mColor').change(function(e){
  var mColor = $('#mColor').val();
  document.getElementById("colorChange").style.backgroundColor = mColor;
});

$('#mIcon').change(function(e){
  var mIcon = "images/" + $('#mIcon').val();
  $(changeLogo).attr('src', mIcon);
});