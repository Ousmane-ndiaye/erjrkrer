import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';

@Component({
	selector: 'app-operations',
	templateUrl: './operations.component.html',
	styleUrls: [ './operations.component.scss' ],
	animations: [ routerTransition() ]
})
export class OperationsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
