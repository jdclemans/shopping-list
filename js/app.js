
$(document).ready(function(){

  $('.addLink').click(function(e) {
  	$(".listForm").show();
    e.preventDefault();
  }); //show input box

  $( ".add" ).click(function() {
    $( "input" ).focus();
  }); //autofocus

  $('.listForm').submit(function(e) {
    var value = $('.item').val();
    $( ".lists" ).prepend("<li>" + value + "</li>");
    e.preventDefault();
  })

  // $( "input" ).keyup(function(e) { 
  //   if(e.which==13) {
  //     var value = $( this ).val();
  //     $( ".lists" ).prepend("<li>" + value + "</li>");
  //   	$(".input").hide();
  //   	$("input").val(" ")
  //   } //End if
  // });

 $('ul').on('click', 'li', function() {
  	if ($(this).is("strike")) {
  		$(this).unwrap();
  	} 
  	else {
  		$(this).wrap("<strike></strike>");
  	}
  }); //strike or unstrike

  $('ul').on('dblclick', 'li', function() {
  	$(this).remove();
  }); //remove items


 // $('ul').on('click', 'li', function()
 //  {
 //  	$(this).wrap("<strike></strike>")
 //  }); //strike

 //  $('ul').on('click', 'li', function()
 //  {
 //  	if ($(this).is("strike")) {
 //  		$(this).unwrap();
 //  	} 


});