import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';

@Component({
	selector: 'app-parametres',
	templateUrl: './parametres.component.html',
	styleUrls: [ './parametres.component.scss' ],
	animations: [ routerTransition() ]
})
export class ParametresComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
