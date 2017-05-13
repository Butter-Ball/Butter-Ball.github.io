
//Hide all the stuff I am going to show when button is clicked

$(".container2").hide();

$(".container").click(function(){
	
	$(".container").hide();
	$(".huge-wrapper").addClass("give-background");
	
	
	$(".container2").css("border", "0px");
	$(".container2").css("color", "white");
	
	$(".container2").show();
	
	$("body").append("<audio autoplay src='unionMusic.mp3'>");
	
	
	
});