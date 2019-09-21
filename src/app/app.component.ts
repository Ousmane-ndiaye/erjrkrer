import { Component, OnInit } from '@angular/core';

import { AdalService } from 'adal-angular4';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	constructor(private adalService: AdalService) {
		adalService.init(environment.authConfig);
	}

	ngOnInit() {
		// Handle callback if this is a redirect from Azure
		this.adalService.handleWindowCallback();
	}
}
