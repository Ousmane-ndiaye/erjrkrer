import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { RestaurantService } from 'src/app/data/service/restaurant.service';
import { Restaurant } from 'src/app/data/schema/restaurant';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ],
	animations: [ routerTransition() ]
})
export class DashboardComponent implements OnInit {
	// bar chart
	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels: string[] = [ 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ];
	public barChartType: string;
	public barChartLegend: boolean;
	public countResto: number;

	public barChartData: any[] = [ { data: [ 70, 75, 80, 81, 70, 65 ], label: 'Nombre de tickets vendu par jour' } ];

	// Doughnut
	public doughnutChartLabels: string[] = [ 'Semaine 1', 'Semaine 2', 'Semaine 3' ];
	public doughnutChartData: number[] = [ 350, 450, 100 ];
	public doughnutChartType: string;

	constructor(public restaurantService: RestaurantService) {}

	ngOnInit() {
		this.barChartType = 'bar';
		this.barChartLegend = true;
		this.doughnutChartType = 'doughnut';
		this.restaurantService.lists().subscribe(
			(data: Restaurant[]) => {
				this.countResto = data.length;
			},
			(error) => {
				this.countResto = 0;
			}
		);
	}

	// events
	public chartClicked(e: any): void {
		// console.log(e);
	}

	public chartHovered(e: any): void {
		// console.log(e);
	}

	public randomize(): void {
		// Only Change 3 values
		const data = [ Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40 ];
		const clone = JSON.parse(JSON.stringify(this.barChartData));
		clone[0].data = data;
		this.barChartData = clone;
		/**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
	}
}
