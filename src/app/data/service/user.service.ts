import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from './../schema/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private http: HttpClient) {}

	create(user: User) {
		return this.http.post(`${environment.apiUrl}/user/create`, user);
	}
}
