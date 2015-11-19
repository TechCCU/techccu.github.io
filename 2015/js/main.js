
$(document).ready(function() {
    /* change section display */
    $('nav a').click(function(e) {
		var activeClass = $('section.sectionShow');
		var hideClass = $($(this).attr("href"));
		function showHide() {
			activeClass.removeClass("sectionShow");
			activeClass.addClass("sectionHide");
			hideClass.removeClass("sectionHide");
			hideClass.addClass("sectionShow");
			hideClass.hide();
			/* google map reload */
			if( hideClass.attr("id") === "traffic" ) {
				hideClass.fadeIn("slow", reloadMap);
			}
			else {
				hideClass.fadeIn("slow");
			}
		}
		$(this).parents().find('.active').removeClass('active');
		$(this).parent().addClass('active');
		activeClass.fadeOut( "slow", showHide);
    });
	// check URI has hashtag or not
	var ht = window.location.hash;
	if( ht !== undefined) {
		var navbtn = $('nav a[href="' + ht + '"]');
		if( navbtn.length == 1)
			navbtn.click();
	}
});

var map;

function reloadMap() {
	center = map.getCenter();
	google.maps.event.trigger(map, 'resize');
	map.setZoom( map.getZoom() );
	map.setCenter( center );
}

function initGoogleMap() {

	var styleArray = [
	{
		featureType: 'all',
		elementType: 'all',
		stylers: [
			{hue: '#ff1a00'},
			{saturation: '-100'},
			{lightness: '33'},
			{gamma: 0.6}
		]
	}
	];

	map = new google.maps.Map(document.getElementById('map'), {
	center: new google.maps.LatLng(23.559200, 120.465990),
	scrollwheel: false,
	styles: styleArray,
	zoom: 14
	});
	
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(23.562159, 120.477802),
		map: map
	});
}

function regnow() {
	window.open( "http://techccu.kktix.cc/events/techccuworkshop2015");
}
