$(document).ready(function(){
	//Too avoid conflicts with Php always declare a $ for JQuery
  $('#photo-one').click(function(){
  	$('#para-one').toggle();
  	$('#para-two, #para-three').hide();
   	$('#photo-one h3').css( "color", "#c0c4c2" );
   	$('#photo-two h3, #photo-three h3').css( "color", "#368bd1" );
  });

  $('#photo-two').click(function(){
  	$('#para-two').toggle();
  	$('#para-one, #para-three').hide();
  	$('#photo-two h3').css( "color", "#c0c4c2" ); 
  	$('#photo-one h3, #photo-three h3').css( "color", "#368bd1" );

  });

  $('#photo-three').click(function(){
  	$('#para-three').toggle();
   	$('#para-one, #para-two').hide();
   	$('#photo-three h3').css( "color", "#c0c4c2" );
  	$('#photo-one h3, #photo-two h3').css( "color", "#368bd1" );

  });

});


