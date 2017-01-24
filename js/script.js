var $work = $("#work");
var $projects = $("#projects");
var $contact = $("#contact");
var $container = $(".container");
var $header = $("header");
var $navBtn = $(".nav-btn");


var firstTime = true;

function displayContent(content){
	var $content = $("#" + content);
	var $contentBtn = $("." + content + "-btn");
	var $prevContent = $(".prev");

	//Checks if its the first time clicking the bottom
	if (firstTime === true){
		//Moves header up to top
		$header.animate({
			top: $header.outerHeight()/2
		}, 'slow', function(){
			$container.css({
			"position": "static",
			});
			$header.css({
				"position":"static",
				"top" : "0",
				"transform" : "translateY(0)",
				"width" : "100%"
			});
		});
		$prevContent = $content; //sets currently clicked content as prev to set-up for next button press
	} else {
		//If not first time, slide up what is displayed
		$prevContent.slideUp();
		$prevContent.removeClass("prev");
	}

	//Resets css styling of all content
	$work.css("order", "3");
	$projects.css("order", "3");
	$contact.css("order", "3");
	$navBtn.css({
			"background-color":"",
			"box-shadow": ""
			});
	$navBtn.attr("disabled", false);

	//Apply css styling to selected content and button
	$content.addClass("prev");
	$content.css("order", "2");
	$contentBtn.css({
		"background-color": "#2B73B9",
		"box-shadow": "none"
	});
	$contentBtn.attr("disabled", true);

	//Slide down the selected ontent
	if (firstTime === true){
		firstTime = false;
		setTimeout(function(){
			$content.slideDown();
		}, 600);
	} else {
		$content.slideDown();
	}
}


$(".reload").click(function(){
	var $prevContent = "";
	if (firstTime == false){
		$prevContent = $(".prev");
		$prevContent.slideUp();

		//Resets css styling of all content
		$work.css("order", "3");
		$projects.css("order", "3");
		$contact.css("order", "3");
		$navBtn.css({
				"background-color":"",
				"box-shadow": ""
				});
		$navBtn.attr("disabled", false);
		firstTime = true;

		//Moves header back to center
		setTimeout(function(){
			$container.css({
				"position": "",
			});
			$header.css({
				"position":"",
				"width" : ""
			});
			$header.animate({
				top: $(window).height()*9/20 - $header.outerHeight()/2
			}, 'slow', function(){
				$header.css({
					"top" : "45%",
					"transform" : "",
				});
			});
		}, 600);
	}	
})