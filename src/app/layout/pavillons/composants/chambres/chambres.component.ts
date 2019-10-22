import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/data/schema/room';
import { RoomService } from 'src/app/data/service/room.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-chambres',
	templateUrl: './chambres.component.html',
	styleUrls: [ './chambres.component.scss' ]
})
export class ChambresComponent implements OnInit {
	loading = false;
	room: Room;
	error = '';

	constructor(public roomService: RoomService, private router: Router) {}

	ngOnInit() {}
}
