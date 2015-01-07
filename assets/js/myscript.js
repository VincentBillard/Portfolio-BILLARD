$(document).ready(function(){

	alert("document is ready");

	var variable = 'test';
	console.log(variable);

	var $a = $('a');
	var $intro = $('.into');
	var $slider = $('#slider');
	var $navulli = $('nav ul li');

	console.log($a);
	console.log($intro);
	console.log($slider);
	console.log($navulli);

	$a.click(function(){
		alert( "Handler for .click() called.");
	});

	$intro.css('color', 'red');

	$slider.click(function(){
		console.log($intro.css('color'));
		$navulli.html('');
	});


});