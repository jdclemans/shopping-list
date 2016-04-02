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
  })

  $("li").click(function()
  {
  	$("li").wrap("<strike>")
  console.log("working"); 	
  }); 


});
