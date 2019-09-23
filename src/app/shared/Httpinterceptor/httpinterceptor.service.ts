import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AdalService } from 'adal-angular4';

@Injectable({
	providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {
	constructor(private adalService: AdalService) {}

	intercept(req, next) {
		const tokenizeReq = req.clone({
			setHeaders: {
				'Content-Type': 'application/json-patch+json',
				'Cache-Control': 'no-cache',
				accept: 'text/plain',
				Authorization: `Bearer ${this.adalService.userInfo.token}`
			}
		});
		return next.handle(tokenizeReq);
	}
}
