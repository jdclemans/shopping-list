$(document).ready(function(){
	$(".input").hide();

  $('.add').mousedown(function() {
  	$(".input").show();
  });

  $( "input" )
  .keyup(function(e) 
  { if(e.which==13) {
    var value = $( this ).val();
    $( ".lists" ).prepend("<li>" + value + "</li>");
  console.log("This is the value " + value ); 	
  	$(".input").hide();
  	$("input").val(" ")
  } //End if
  })
  // .keyup();
});
