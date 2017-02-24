"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        //$.getScript('./app/home/home-carousel.js');
        $("#sponsor-list").owlCarousel({
            //autoPlay: 3000, //Set AutoPlay to 3 seconds
            //stopOnHover: true,
            items: 5,
            itemsDesktop: [1200, 3],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 3],
            itemsTabletSmall: [625, 2],
            itemsMobile: [479, 2]
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-home',
        templateUrl: './home.component.html',
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map