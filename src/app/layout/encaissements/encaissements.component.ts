import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';

@Component({
	selector: 'app-encaissements',
	templateUrl: './encaissements.component.html',
	styleUrls: [ './encaissements.component.scss' ],
	animations: [ routerTransition() ]
})
export class EncaissementsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
