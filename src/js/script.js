$(document).ready(function() {
 
  $("#sponsor-list").owlCarousel({
    //autoPlay: 3000, //Set AutoPlay to 3 seconds
    //stopOnHover: true,
    items : 5,
    itemsDesktop: [1200,3],
    itemsDesktopSmall: [991,3],
    itemsTablet: [767,2],
    itemsTabletSmall: [625,2],
    itemsMobile: [479,1]      
  });
});

function initMap() {
  var rohm = {lat: 40.005349, lng: 116.335930};
  var map = new google.maps.Map(document.getElementById('contactMap'), {
    zoom: 14,
    center: rohm
  });
  var marker = new google.maps.Marker({
    position: rohm,
    map: map
  });
}
