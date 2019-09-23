import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { CardService } from 'src/app/data/service/card.service';

@Component({
	selector: 'app-add-carte',
	templateUrl: './add-carte.component.html',
	styleUrls: [ './add-carte.component.scss' ]
})
export class AddCarteComponent {
	closeResult: string;
	constructor(private modalService: NgbModal, private cardService: CardService) {}

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

	linkCard(formData) {
		console.log(formData.value);
		this.cardService.link(formData.value).subscribe((data: any) => {
			console.log(data);
		});
	}
}
