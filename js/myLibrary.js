$(document).ready(function(){

//when you click the left button, the text "I'm right" will appear

	$(".leftbutton").click(function(){
		$(".lefttext").text("I'm right!");
	});


//when you click the right button, the text "I'm right" will appear and the left text will change back to its original state

	$(".rightbutton").click(function(){
		$(".righttext").text("I'm right!")
			$(".lefttext").text("Left button");
	});


//when you click the left button, the text "I'm right" will appear and the right text will change back to its original state

	$(".leftbutton").click(function(){
		$(".lefttext").text("I'm right!")
			$(".righttext").text("Right button");
	});


//when you hover over this banner, the text below will appear
	$(".banner").hover(function(){
		$(".bannertext").toggle();
	});


//when you hover over the banner, everything will disappear and new text will appear (not sure why this isn't working and why it causes the 4th event to not work)	

	// $(".container").hide(function(){
	// 	alert("Everything disappeared");
	// }
});