import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
	selector: 'app-pavillons',
	templateUrl: './pavillons.component.html',
	styleUrls: [ './pavillons.component.scss' ],
	animations: [ routerTransition() ]
})
export class PavillonsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
