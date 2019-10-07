import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Restaurant } from './../schema/restaurant';

@Injectable({
	providedIn: 'root'
})
export class RestaurantService {
	constructor(private http: HttpClient) {}

	create(resto: Restaurant) {
		return this.http.post(`${environment.apiUrl}/restaurant/create`, resto);
	}

	lists() {
		return this.http.get(`${environment.apiUrl}/restaurant/list`);
	}
}
