import { Restaurant } from 'src/app/data/schema/restaurant';
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantService } from 'src/app/data/service/restaurant.service';
import { UserService } from 'src/app/data/service/user.service';

@Component({
	selector: 'app-add-restaurant',
	templateUrl: './add-restaurant.component.html',
	styleUrls: [ './add-restaurant.component.scss' ]
})
export class AddRestaurantComponent {
	closeResult: string;
	restaurant: Restaurant = {};

	constructor(private modalService: NgbModal, public restaurantService: RestaurantService, public userService: UserService) {}

	open(content) {
		this.modalService.open(content).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			}
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	addNewRestaurant(formData) {
		this.restaurant.name = formData.value.name;
		this.restaurantService.create(this.restaurant).subscribe((data: any) => {
			console.log(data);
		});
	}
}
