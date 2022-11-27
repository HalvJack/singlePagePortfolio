//sticky menu 
$(document).ready(function() {
					var NavY = $('#nav').offset().top;
					 
					var stickyNav = function(){
					var ScrollY = $(window).scrollTop();
						  
					if (ScrollY > NavY) { 
						$('#nav').addClass('sticky');
					} else {
						$('#nav').removeClass('sticky'); 
					}
					};
					 
					stickyNav();
					 
					$(window).scroll(function() {
						stickyNav();
					});
					});
//scrolling
jQuery(function($)
		{
			//zresetuj scrolla
			$.scrollTo(0);
			
			$('#link1').click(function() { $.scrollTo($('#socials'), 1000);});
			$('.scrollup').click(function() { $.scrollTo($('body'), 1000);	});
		}	
		);
		
		//pokaz podczas przewijania
		$(window).scroll(function() 
		{
			if($(this).scrollTop()>150) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();
		}
		);
		
//clear JavaScript
var lashes = "image";
//alert(lashes[3]); 

var e0 = document.getElementById('e0');
var e1 = document.getElementById('e1');
var userData = document.getElementById('information');

e0.addEventListener("click",function() {revealEyes(0); });
e1.addEventListener("click",function() {revealEyes(1); });
userData.addEventListener("click", function() {revealUsersData(); });


function revealEyes(nr)
{
	//$('#e' + nr).css('opacity', '0');
	//$('#e' + nr).removeClass('eye1');
	//var picture = "url(img/rzesy/1m/2do1/image1.jpg)";
	//document.getElementById("e"+nr).innerHTML = "img/rzesy/1m/2do1/image1.jpg";
	//document.getElementById("user").innerHTML = info;
	
}
function revealUsersData()
{
	$('#information').css('font-size', '8');
	document.getElementById("information").innerHTML = 'emilka.wojdyla5@gmail.com                            tel. 535110460';
	
}
















