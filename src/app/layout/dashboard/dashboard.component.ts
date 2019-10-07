import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

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
	public barChartLabels: string[] = [ 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi' ];
	public barChartType: string;
	public barChartLegend: boolean;

	public barChartData: any[] = [ { data: [ 65, 59, 80, 81, 60 ], label: 'Nombre de tickets vendu par jour' } ];

	// Doughnut
	public doughnutChartLabels: string[] = [ 'Semaine 1', 'Semaine 2', 'Semaine 3' ];
	public doughnutChartData: number[] = [ 350, 450, 100 ];
	public doughnutChartType: string;

	constructor() {}

	ngOnInit() {
		this.barChartType = 'bar';
		this.barChartLegend = true;
		this.doughnutChartType = 'doughnut';
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
