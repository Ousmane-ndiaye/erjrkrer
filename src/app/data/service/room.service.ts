import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class RoomService {
	constructor(private http: HttpClient) {}

	create(data) {
		return this.http.post(`${environment.apiUrl}/room/create`, data);
	}
}
