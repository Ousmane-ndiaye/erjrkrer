import { User } from 'src/app/data/schema/user';
import { Restaurant } from 'src/app/data/schema/restaurant';
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantService } from 'src/app/data/service/restaurant.service';
import { UserService } from 'src/app/data/service/user.service';
import { Router } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-add-restaurant',
	templateUrl: './add-restaurant.component.html',
	styleUrls: [ './add-restaurant.component.scss' ]
})
export class AddRestaurantComponent {
	closeResult: string;
	restaurant: Restaurant = {};
	loading = false;
	error = '';

	constructor(
		private modalService: NgbModal,
		public restaurantService: RestaurantService,
		public userService: UserService,
		private router: Router,
		private spinner: NgxSpinnerService
	) {}

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
		this.loading = true;
		this.spinner.show();
		this.restaurant.name = formData.value.name.replace(/ /gi, '_');
		this.restaurantService.create(this.restaurant).subscribe(
			(data1: any) => {
				console.log(data1);
				const gerant: User = {
					firstName: formData.value.firstName,
					lastName: formData.value.lastName,
					username: formData.value.username
				};
				this.userService.create(gerant).subscribe(
					(data2: any) => {
						console.log(data2);
						this.router.navigate([ '/restaurants' ]);
					},
					(error) => {
						this.error = error;
                        this.loading = false;
                        this.spinner.hide();
					}
				);
			},
			(error) => {
				this.error = error;
                this.loading = false;
                this.spinner.hide();
			}
		);
	}
}
