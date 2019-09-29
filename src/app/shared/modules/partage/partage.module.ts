import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { NgxSpinnerModule } from 'ngx-spinner';

import { ControlMessagesComponent } from './component/control-messages/control-messages.component';
import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
	imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, NgxSpinnerModule ],
	declarations: [ ControlMessagesComponent, SpinnerComponent ],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		HttpClientModule,
		NgxSpinnerModule,
		ControlMessagesComponent,
		SpinnerComponent
	]
})
export class PartageModule {}
