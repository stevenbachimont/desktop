$(document).ready(function() {
	$('#video').addClass('fermee1');
	$('#website').addClass('fermee2');
	$('#custom').addClass('fermee3');
	$('#sticky').addClass('fermee4');
});


$('.frame').mousedown(function(){
	$(".active").removeClass("active");
	$(this).addClass("active");
});

$('.frame').not(".maximized").resizable({
	alsoResize: ".active .content",
	minWidth: 200,
	minHeight: 100
}).draggable({
	handle: ".topbar"
});

$('.maxbtn').click(function(){
	$(this).parent().parent().toggleClass("maximized");
});

$('.xbtn1').click(function(){
	$('#video').addClass('fermee1');
});

$('#ouvrirVideo').click(function(){
	$('#video').removeClass('fermee1');
});


$('.xbtn2').click(function(){
	$('#website').addClass('fermee2');
});


$('#ouvrirWebsite').click(function(){
	$('#website').removeClass('fermee2');
});


$('.xbtn3').click(function(){
	$('#custom').addClass('fermee3');
});


$('#ouvrirCustom').click(function(){
	$('#custom').removeClass('fermee3');
});


$('.xbtn4').click(function(){
	$('#sticky').addClass('fermee4');
});


$('#ouvrirSticky').click(function(){
	$('#sticky').removeClass('fermee4');
});

