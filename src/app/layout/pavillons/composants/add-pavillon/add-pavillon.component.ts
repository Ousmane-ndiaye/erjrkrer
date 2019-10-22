import { Housing } from 'src/app/data/schema/housing';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { HousingService } from 'src/app/data/service/housing.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-pavillon',
	templateUrl: './add-pavillon.component.html',
	styleUrls: [ './add-pavillon.component.scss' ]
})
export class AddPavillonComponent implements OnInit {
	closeResult: string;
	loading = false;
	house: Housing;
	error = '';
	constructor(
		private modalService: NgbModal,
		public housingService: HousingService,
		private router: Router,
		private spinner: NgxSpinnerService
	) {}

	ngOnInit() {}

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

	addNewPavillon(formData) {
		this.loading = true;
		this.spinner.show();
		this.house = {
			number: formData.value.number,
			amount: formData.value.amount
		};
		this.housingService.create(this.house).subscribe(
			(data: any) => {
				console.log(data);
				this.router.navigate([ '/pavillons' ]);
			},
			(error) => {
				this.error = error;
				this.loading = false;
				this.spinner.hide();
			}
		);
	}
}
