$(document).ready(function(){
  $("#design").click(function(){
    $("#design").hide();
    $("#a").show();
  });
  $("#a").click(function(){
    $("#a").hide();
    $("#design").show();
  });
  $("#develo").click(function(){
    $("#develo").hide();
    $("#b").show();
  });
  $("#b").click(function(){
    $("#b").hide();
    $("#develo").show();
  });
  $("#product").click(function(){
    $("#product").hide();
    $("#c").show();
  });
  $("#c").click(function(){
    $("#c").hide();
    $("#product").show();
  });
});
