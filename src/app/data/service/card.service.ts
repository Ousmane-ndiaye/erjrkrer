import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CardService {
	constructor(private http: HttpClient) {}

	create(data) {
		return this.http.post(`${environment.apiUrl}/card/create`, data);
	}

	link(data) {
		return this.http.post(`${environment.apiUrl}/card/link`, data);
	}

	recharge(data) {
		return this.http.post(`${environment.apiUrl}/card/recharge`, data);
	}
}
