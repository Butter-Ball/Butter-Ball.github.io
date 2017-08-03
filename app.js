
$(".thanks-div").hide();

$(".video-wrapper").hide();



/* This function gives me a value for the Horizontal offset */
function zeroToWhateverH() {
	var zeroToWhateverNumber = Math.floor(Math.random() * 95);
	var stringOfNum = zeroToWhateverNumber.toString();
	return stringOfNum + "vw";
}

/* This function gives me a value for the Vertical offset */
function zeroToWhateverV() {
	var zeroToWhateverNumber = Math.floor(Math.random() * 95);
	var stringOfNum = zeroToWhateverNumber.toString();
	return stringOfNum + "vh";
}

function giveZ() {
	z = 5;
	return z.toString();
	z++;
}


function playMusic() {
	$("body").append("<audio autoplay src='darude.mp3'>");
}

function playVideo() {
	$(".video-wrapper").append("<video autoplay src='fmjclip.mp4' id='clip'/>");
}

function flashColors() {
	
	document.body.style.backgroundColor = 'rgb(' +
	(Math.floor(Math.random() * 256)+20) + ',' +
	(Math.floor(Math.random() * 256)+20) + ',' +
	(Math.floor(Math.random() * 256)+20) + ')';
	setTimeout('flashColors()', 100);
}

function showThis(src) { /* keeping things dry my making new show functions with less code */
	$("body").add("<img src=" + src + ">").css("width", "140px").css("position","fixed").css("left", zeroToWhateverH()).css("top",zeroToWhateverV()).appendTo( document.body );
}

function showThisBig(src) { /* This is a special funtion to show a bigger image at the end */
	$("body").add("<img src=" + src + ">").css("width", "28%").css("position","fixed").css("left", zeroToWhateverH()).css("top",zeroToWhateverV()).appendTo( document.body );
}




function showHorn() {
    showThis("horn.jpg");
}

function showBae() {
	showThis("bae.jpg");
}

function showSpinner() {
	showThis("spinner.jpg");
}

function showDew() {
	showThis("dew.jpg");
}

function showCod() {
	showThis("cod.jpg");
}

function showFood() {
	showThis("food.jpg");
}

function showDeal() {
	showThis("deal.jpg");
}

function showMlg() {
	showThis("mlg.jpg");
}

function showSnoop() { /* This is a special funtion to show a bigger image at the end */
	$("body").add("<img src='snoop.jpg'>").css("width", "50%").css("position","fixed").css("left", "25%").css("top","0vh").appendTo( document.body );
}

function showBoom() { /* This is a special funtion to show a bigger image at the end */
	$("body").add("<img src='boom.jpg'>").css("width", "90%").css("position","fixed").css("left", "5%").css("top","0vh").appendTo( document.body );
}

function showBlunt() { /* This is a special funtion to show a bigger image at the end */
	$("body").add("<img src='blunt.jpg'>").css("width", "28%").css("position","fixed").css("left", zeroToWhateverH()).css("top",zeroToWhateverV()).appendTo( document.body );
}

function showOh() {
	showThisBig("oh.JPG");
}

function showTripple() {
	showThisBig("tripple.jpg");
}



function showPepe() {

    /*$( "body" ).append( "<img src='pepe.png' class='pepe-img'>" );*/
	
	/* Serious bugs with this code when left to itself. The .css applies its properties not only to the added image, but also to the body itself, abviously causing a heap of problems. I fixed it with the !important decleration in the css file but I shoul look into a better way to do this */
	$("body").add("<img src='pepe.jpg'>").css("width", "140px").css("position","fixed").css("left", zeroToWhateverH()).css("top",zeroToWhateverV()).appendTo( document.body );
}




function runForTime(run, time) { /* This function takes a function and runs it for a specified time */
	
	var mashine = setInterval(function(){
		
		run();
		
	},150);

	setTimeout(function(){
        clearInterval(mashine); //clear above interval
    },time);
}









/* 
===================================================================
	Main event function
===================================================================
*/

$(".calm-button").click(function(){
	
	$(".calm-button").hide();
	flashColors();
	playMusic();
	
	/*  This is basically the runForTimeFunction. I wll keep this as reference
	
	var pepeMashine = setInterval(function(){
		
		showPepe();
		
	},50);

	setTimeout(function(){
        clearInterval(pepeMashine); //clear above interval after 5 seconds
    },3000); 
	
	*/
	
	runForTime(showPepe, 3200);
	
	setTimeout(function(){
		runForTime(showHorn, 3200);
	}, 3000);
	
	setTimeout(function(){
		runForTime(showBae, 3200);
	}, 6000);
	
	setTimeout(function(){
		runForTime(showSpinner, 3200);
	}, 9000);
	
	setTimeout(function(){
		runForTime(showDew, 3200);
	}, 12000);
	
	setTimeout(function(){
		runForTime(showCod, 3200);
	}, 15000);
	
	setTimeout(function(){
		runForTime(showFood, 3200);
	}, 18000);
	
	setTimeout(function(){
		runForTime(showDeal, 3200);
	}, 21000);
	
	setTimeout(function(){
		runForTime(showMlg, 3200);
	}, 24000);
	
	setTimeout(function(){
		showSnoop();
	}, 28000);
	
	setTimeout(function(){
		runForTime(showBlunt, 45000);
	}, 29500);
	
	setTimeout(function(){
		runForTime(showOh, 5000);
	}, 37000);
	
	setTimeout(function(){
		runForTime(showTripple, 3000);
	}, 51000);
	
	setTimeout(function(){
		runForTime(showTripple, 3000);
	}, 68000);
	
	setTimeout(function(){
		runForTime(showOh, 14000);
	}, 72000);
	
	setTimeout(function(){
		showBoom();
	}, 86500);
	
	setTimeout(function(){
		$(".thanks-div").slideDown("slow");
	}, 89500);
	
	setTimeout(function(){
		$(".video-wrapper").show();
		playVideo();
	}, 91500);
	
	
	
	
	
	
	
	
	
	
	
	
	
});
