import { Component, OnInit } from '@angular/core';
import { UserPayment } from 'src/app/data/schema/userPayment';
import { PaymentService } from 'src/app/data/service/payment.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-table-transaction',
	templateUrl: './table-transaction.component.html',
	styleUrls: [ './table-transaction.component.scss' ]
})
export class TableTransactionComponent implements OnInit {
	userPayments: UserPayment[];
	loading: boolean;
	error: any;
	constructor(public paymentService: PaymentService, private spinner: NgxSpinnerService) {}

	ngOnInit() {
		this.userPayments = [];
		this.loading = true;
		this.spinner.show();
		this.paymentService.lists().subscribe(
			(data: UserPayment[]) => {
				this.userPayments = data;
				console.log(data);
				this.loading = false;
				this.spinner.hide();
			},
			(error) => {
				this.error = error;
				this.loading = false;
				this.spinner.hide();
			}
		);
	}
}
