import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router, ActivatedRoute } from '@angular/router';

import { AdalService } from 'adal-angular4';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ],
	animations: [ routerTransition() ]
})
export class LoginComponent implements OnInit {
	returnUrl: string;

	constructor(private route: ActivatedRoute, private router: Router, private adalService: AdalService) {}

	ngOnInit() {
		// redirect to home if already logged in
		if (this.adalService.userInfo && this.adalService.userInfo.authenticated) {
			// get return url from route parameters or default to '/'
			this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
			this.router.navigate([ this.returnUrl ]);
		}
	}

	login() {
		this.adalService.login();
	}
}
