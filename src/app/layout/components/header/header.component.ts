import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AdalService } from 'adal-angular4';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	public pushRightClass: string;
	name: string;

	constructor(private translate: TranslateService, public router: Router, private adalService: AdalService) {
		this.router.events.subscribe((val) => {
			if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
				this.toggleSidebar();
			}
		});
	}

	ngOnInit() {
		this.pushRightClass = 'push-right';
		this.name = this.adalService.userInfo.profile.name;
	}

	isToggled(): boolean {
		const dom: Element = document.querySelector('body');
		return dom.classList.contains(this.pushRightClass);
	}

	toggleSidebar() {
		const dom: any = document.querySelector('body');
		dom.classList.toggle(this.pushRightClass);
	}

	rltAndLtr() {
		const dom: any = document.querySelector('body');
		dom.classList.toggle('rtl');
	}

	onLoggedout() {
		this.adalService.logOut();
	}

	changeLang(language: string) {
		this.translate.use(language);
	}
}
