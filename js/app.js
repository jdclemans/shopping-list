
$(document).ready(function(){
	$(".input").hide();

  $('.add').mousedown(function() {
  	$(".input").show();
  }); //show input box

  $( ".add" ).click(function() {
  $( "input" ).focus();
}); //autofocus

  $( "input" )
  .keyup(function(e) 
  { if(e.which==13) {
    var value = $( this ).val();
    $( ".lists" ).prepend("<li>" + value + "</li>");
  	$(".input").hide();
  	$("input").val(" ")
  } //End if
  });

 $('ul').on('click', 'li', function()
  {
  	if ($(this).is("strike")) {
  		$(this).unwrap();
  	} 
  	else {
  		$(this).wrap("<strike></strike>");
  	}
  console.log("working"); 	
  }); //strike/unstrike

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