import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
	selector: 'app-recharges',
	templateUrl: './recharges.component.html',
	styleUrls: [ './recharges.component.scss' ],
	animations: [ routerTransition() ]
})
export class RechargesComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
