import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-table-pavillons',
	templateUrl: './table-pavillons.component.html',
	styleUrls: [ './table-pavillons.component.scss' ]
})
export class TablePavillonsComponent implements OnInit {
	closeResult: string;
	loading = false;
	error = '';
	constructor(private modalService: NgbModal, private spinner: NgxSpinnerService) {}

	ngOnInit() {}

	open(content, pavillons) {
		this.modalService.open(content, { size: 'lg' }).result.then(
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

	addNewRoom(formData) {
		console.log(formData);
	}
}
