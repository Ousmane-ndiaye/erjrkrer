import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { NgxSpinnerService } from 'ngx-spinner';
import { CardService } from 'src/app/data/service/card.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.scss' ]
})
export class AddComponent {
	closeResult: string;
	loading = false;
	error = '';
	constructor(
		private modalService: NgbModal,
		public cardService: CardService,
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

	makeRecharge(formData) {
		this.loading = true;
		this.spinner.show();
		const recharge = {
			number: formData.value.number,
			amount: formData.value.amount
		};
		this.cardService.recharge(recharge).subscribe(
			(data: any) => {
				console.log(data);
				this.router.navigate([ '/recharges' ]);
			},
			(error) => {
				this.error = error;
				this.loading = false;
				this.spinner.hide();
			}
		);
	}
}
