window.sr = ScrollReveal({
	reset: true,
	duration: 700
});
sr.reveal('.reveal');

var scroll = new SmoothScroll('a[href*="#"]', {
	offset: 77
});

var button = document.getElementById("learnMore");
var title = document.getElementById("companyName");
var tagLine = document.getElementById("tagLine");

var removeClasses = function () {
	button.classList.remove("animated");
	title.classList.remove("animated");
	title.classList.remove("fadeInLeft");
	tagLine.classList.remove("animated");
	tagLine.classList.remove("fadeInRight");
}

setTimeout(removeClasses, 1000);

window.onscroll = function () {
	toggleStickyNavbar();
};

var navbar = document.getElementById("navbar");

function toggleStickyNavbar() {
	if (window.pageYOffset >= 150) {
		navbar.classList.remove("py-5");
		navbar.classList.add("sticky");
		navbar.classList.add("py-3");
	} else {
		navbar.classList.remove("sticky");
		navbar.classList.add("py-5");
		navbar.classList.remove("py-3");
	}
}