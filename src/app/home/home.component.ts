import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-home',
	templateUrl: './home.component.html',
	// styleUrls: ['./app.component.css']	
})
export class HomeComponent implements OnInit {
	ngOnInit(): void {
		//$.getScript('./app/home/home-carousel.js');
		$("#sponsor-list").owlCarousel({
    //autoPlay: 3000, //Set AutoPlay to 3 seconds
    //stopOnHover: true,
    items : 5,
    itemsDesktop: [1200,3],
    itemsDesktopSmall: [991,3],
    itemsTablet: [767,3],
    itemsTabletSmall: [625,2],
    itemsMobile: [479,2]
  });
	}
}
