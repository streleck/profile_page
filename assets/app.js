//navigation logics
$("#nav-about").on("click", function (){
	$(".content").hide();
	$("#about-me").show();
	$("#nav-about").attr("class", "nav-btn-on");
	$("#nav-port").attr("class", "nav-btn-off");
	$("#nav-resume").attr("class", "nav-btn-off");
	$("#nav-contact").attr("class", "nav-btn-off");
});

$("#nav-port").on("click", function (){
	$(".content").hide();
	$("#portfolio").show();
	$("#nav-port").attr("class", "nav-btn-on");
	$("#nav-about").attr("class", "nav-btn-off");
	$("#nav-resume").attr("class", "nav-btn-off");
	$("#nav-contact").attr("class", "nav-btn-off");
});

$("#nav-resume").on("click", function (){
	$(".content").hide();
	$("#resume").show();
	$("#nav-resume").attr("class", "nav-btn-on");
	$("#nav-port").attr("class", "nav-btn-off");
	$("#nav-about").attr("class", "nav-btn-off");
	$("#nav-contact").attr("class", "nav-btn-off");
});

$("#nav-contact").on("click", function (){
	$(".content").hide();
	$("#contact").show();
	$("#nav-contact").attr("class", "nav-btn-on");
	$("#nav-port").attr("class", "nav-btn-off");
	$("#nav-resume").attr("class", "nav-btn-off");
	$("#nav-about").attr("class", "nav-btn-off");
});

//portfolio content
var portfolioItems = [
	{
		image: "./assets/images/api_uptime_monitor.png",
		title: "API Uptime Monitor",
		description: "This is a full stack web app built on node, that allows the user to track their API's availability. The user can view statistics about uptime, error messages, and can opt to recieve email alerts if the endpoint goes down. I built the front end with vanilla javascript in attempt to build a clean, intuitive UI from the ground up.",
		link: 'https://api-uptime-monitor.herokuapp.com/'
	},
	{
		image: "./assets/images/battle_math.png",
		title: "Battle Math",
		description: "Battle Math is an educational role-playing game designed for elementary students to hone their foundational math skills. It is built with a React front end and a Node Express/MySQL back end. The game is based on the idea of each user having a persistent character whose skills grows along with the student. With experience, the character gains new, more powerful abilities that require the user to solve more difficult problems to unelash.",
		link: "https://battlemath.herokuapp.com/"
	},
	{
		image: "./assets/images/giftastic.png",
		title: "basketball.gif",
		description: "This site makes it easy to search for a variety af basketball-related gifs. It uses AJAX to interface with the giphy.com API and JQUERY to dynamically generate buttons that search and display content. Videos can be played or stopped with a click. Using the text input, the user can create new buttons for quick searching of new keywords.",
		link: 'https://streleck.github.io/GIFtastic/'
	},
	{
		image: "./assets/images/train_tables.png",
		title: "Train Tables",
		description: "Train Tables uses a Firebase database to store a set of train arrival times. I used MomentJS to calculate the next arrival time and dynamically display the wait time until the next arrival. The user is able to enter new trains to the schedule and arrival times will automatically be calculated and displayed, based on the entered start time and frequency.",
		link: "https://streleck.github.io/Train_Tables/"
	},
	{
		image: "./assets/images/trivia_game.png",
		title: "Trivia Game",
		description: "Put your knowlege of the animal kingdom to the test, but you'd better hurry! The user rushes against a timer to answer a series of multiple-choice questions. After each answer, a result display congratulates or corrects the user. At the end of the quiz the results are tallied to give the user a final score and to reveal their spirit animal.",
		link: "https://streleck.github.io/TriviaGame/"
	},
	{
		image: "./assets/images/profile_page.png",
		title: "This Page",
		description: "A basic HTML/CSS/Javascript page.",
		link: "https://en.wikipedia.org/wiki/Recursion"
	}
]

//navigate portfolio
var portfolioIndex = 0;
$(".port-slide-btn").on("click", function(){
	portfolioIndex += parseInt($(this).attr("data"));
	if (portfolioIndex >= portfolioItems.length){
		portfolioIndex =0
	}
	if (portfolioIndex < 0){
		portfolioIndex = (portfolioItems.length - 1)
	}
	$(".portfolio-link").hide();
	$("#link-" + portfolioIndex).show();
	$(".portfolio-link").attr("href", portfolioItems[portfolioIndex].link)
	$("#portfolio-headline").html(portfolioItems[portfolioIndex].title)
	$("#portfolio-description").html(portfolioItems[portfolioIndex].description)
});