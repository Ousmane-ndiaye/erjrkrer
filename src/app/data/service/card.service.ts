import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CardService {
	constructor(private http: HttpClient) {}

	linkCard(data) {
		return this.http.post(`${environment.apiUrl}/card/link`, data, { observe: 'response' });
	}
}
