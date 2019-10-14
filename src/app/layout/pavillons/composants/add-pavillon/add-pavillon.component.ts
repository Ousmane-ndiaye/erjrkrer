import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-add-pavillon',
	templateUrl: './add-pavillon.component.html',
	styleUrls: [ './add-pavillon.component.scss' ]
})
export class AddPavillonComponent implements OnInit {
	closeResult: string;
	loading = false;
	error = '';
	constructor(private modalService: NgbModal, private spinner: NgxSpinnerService) {}

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

	addNewPavillon(formData) {}
}
