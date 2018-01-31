var $name = $('#name');
var $password = $('#password');
var $textarea = $('#textarea1');
var $btn = $("#addPublish");

$(document).ready(function() {
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.parallax').parallax();
  $('.modal').modal();
  $name.keyup(validate);
  $password.keyup(validate);
  $btn.click(publish);
});

var validate = function() {
  if ($('#name').val().trim().length > 0 && $('#password').val().trim().length > 0) {
    $('#enter').removeClass('disabled');
    $('#enter').addClass('abled');
  } else {
    $('#enter').addClass('disabled', true);
    $('#enter').removeClass('abled');
  };
};

var publish = function(e) {
  e.preventDefault();
  var $text = $('#textarea1').val();
  if ($text.trim().length > 0) {
    $btn.removeAttr("disabled");
    $btn.attr("abled");
    paintPublish($text);
  };
};

var paintPublish = function($text) {
  var $container = $('<div class="row"> </div>');
  var $div = $('<div class="col s4 col m6 col l12 center published"></div>');
  var $p = $("<p id='text'></p>");

  $p.text($text);
  $container.append($div);
  $container.append($p);
  $("#print").prepend($container);

  $("#textarea1").val('');
};









  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAlAZ7lD_ek20WCGhSNS73SvALNyHrQYU0",
  //   authDomain: "foodlovers-a505a.firebaseapp.com",
  //   databaseURL: "https://foodlovers-a505a.firebaseio.com",
  //   projectId: "foodlovers-a505a",
  //   storageBucket: "",
  //   messagingSenderId: "703106499379"
  // };
  // firebase.initializeApp(config);
