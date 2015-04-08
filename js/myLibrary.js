$(document).ready(function(){

//when you click the left button, the text "I'm right" will appear

	$(".leftbutton").click(function(){
		$(".lefttext").text("I'm right!")
	});


//when you click the right button, the text "I'm right" will appear and the left text will change back to its original state

	$(".rightbutton").click(function(){
		$(".righttext").text("I'm right!")
			$(".lefttext").text("Left button")
	});


//when you click the left button, the text "I'm right" will appear and the right text will change back to its original state

	$(".leftbutton").click(function(){
		$(".lefttext").text("I'm right!")
			$(".righttext").text("Right button")
	});
});