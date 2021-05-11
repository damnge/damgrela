$(window).on("load", function(){
    $(".loader").fadeOut("slow");
      $('html, body').css({
        'position':'relative'});
      setTimeout(function() {$("#animate-this1").addClass("faded-hero");},300);
      setTimeout(function() {$("#animate-this2").addClass("faded-hero");},600);
      setTimeout(function() {$("#header-description").addClass("faded-hero");},900);
      setTimeout(function() {$("#animate-this4").addClass("fade");},1200);
      setTimeout(function() {$("#animate-this5").addClass("fade");},1500);
      setTimeout(function() {$("#element-to-animate1").addClass("faded-hero");},400);
      setTimeout(function() {$("#element-to-animate2").addClass("faded-hero");},800);
      setTimeout(function() {$("#element-to-animate3").addClass("faded-hero");},1100);
      setTimeout(function() {$("#element-to-animate4").addClass("fade-headline-div");},1500);
      setTimeout(function() {$("#element-to-animate5").addClass("faded-description");},1900);
      setTimeout(function() {$("#element-to-animate6").addClass("fade");},2400);
      setTimeout(function() {$("#element-to-animate6").addClass("fade");},2400);
      setTimeout(function() {$("#f-that-logo").addClass("fade-logo");},2600);
      setTimeout(function() {$("#element-to-animate9").addClass("fade");},2600);
      setTimeout(function() {$("#element-to-animate7").addClass("shine");},2900);
});


window.onbeforeunload = function () {
  setTimeout(function(){
  window.scrollTo(0, 0);}, 1000);
}
// ANIMATE LOGO ON SCROLL

function rotate() {
  const img = document.getElementById("sign");
  img.classList.add("rotated-logo");
  setTimeout(function(){ img.classList.add("rotated-back")}, 900);
  setTimeout(function(){ img.classList.remove("rotated-logo")}, 1500);
  setTimeout(function(){ img.classList.remove("rotated-back")}, 1500);
  
  }

window.onscroll = function() {myFunction()};
const anchor = document.getElementById("logo-link");   
const header = document.getElementById("logo");
const rotateLogo = document.getElementById("sign");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    anchor.setAttribute('href','#hero-section');
    rotateLogo.classList.add("sign");
  } else {
    header.classList.remove("sticky");
    anchor.setAttribute('href','https://www.damgrela.com/');
    rotateLogo.classList.remove("sign");
  }
}


// COPY MY EMAIL 

$(document).ready(function() {

var mailto = $('a[href^=mailto]');

// Disable opening your email client. yuk.
$('a[href^=mailto]').click(function() {
return false; 
})
// On click, get href and remove 'mailto:' from value
// Store email address in a variable.
mailto.click(function() {
var href = $(this).attr('href');
var email = href.replace('mailto:', '');
copyToClipboard(email);
var tooltip = document.getElementById("myTooltip");
tooltip.innerHTML = "e-mail copied";
setTimeout(function(){window.open("mailto:dam@damgrela.com")},1000);
});

});

// Copies the email variable to clipboard
function copyToClipboard(text) {
var dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute('value', text);
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
}

function outFunc() {
const tooltip = document.getElementById("myTooltip");
tooltip.innerHTML = "copy to clipboard";
}

function ShowSecond()
{
const show = document.getElementById("show-email");
show.className="email-copied";
setTimeout(function(){ show.className="show"; }, 3000);
setTimeout(function() { show.className="hide"; }, 4000);

}

function ShowMobile()
{
const show = document.getElementById("email-mobile");
show.className="email-mobile";
setTimeout(function(){ show.className="email-mobile-out"; }, 3000);
setTimeout(function() { show.className="hide"; }, 4000);

}


$(document).ready(function(){
  $(this).scrollTop(0);
});


  // INTERSECTION OBSERVER

  

// Options docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
const options = {
  root: null, // use the document's viewport as the container
  rootMargin: '0px', // % or px - offsets added to each side of the intersection 
  threshold: 0.1 // percentage of the target element which is visible
}
const playThis = document.querySelectorAll('.observer-play');
// Callback docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Targeting_an_element_to_be_observed
let callback = (entries) => { 
	entries.forEach(entry => {
		
		// If entry (box) is visible - according with the params set in `options`
		// then adds `isVisible` class to box
		// otherwise removes `isVisible` class
		
		if(entry.isIntersecting) {
			entry.target.classList.add('isVisible');
		} 

	});
}

// Create the intersection observer instance by calling its constructor and passing it a
// callback function to be run whenever a threshold is crossed in one direction or the other:
let observer = new IntersectionObserver(callback, options);


	playThis.forEach(snap => { observer.observe(snap) });