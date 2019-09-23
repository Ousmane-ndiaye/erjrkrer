import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Restaurant } from './../schema/restaurant';

@Injectable({
	providedIn: 'root'
})
export class RestaurantService {
	constructor(private http: HttpClient) {}

	createRestaurant(resto: Restaurant) {
		return this.http.post(`${environment.apiUrl}/restaurant/create`, resto, { observe: 'response' });
	}
}
