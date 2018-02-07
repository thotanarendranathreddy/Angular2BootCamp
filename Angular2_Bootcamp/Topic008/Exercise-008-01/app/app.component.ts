import {Component, AfterViewInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MousePadComponent} from './mousepad.component';

@Component({

	selector:'my-app',
	template:`
	<div class="container">
		<mousepad></mousepad>
		<log-board [messages]="messages"></log-board>
	</div>
	`

})
export class AppComponent implements AfterViewInit{
	@ViewChild(MousePadComponent) mousepad: MousePadComponent;
	messages: any[] =[];
	counter = 0;
	ngAfterViewInit(){
		this.mousepad.mouseEvents.subscribe(
			(m: MouseEvent) => {
				this.log(`(${m.clientX}, ${m.clientY}`);
			},
			()=> {this.log("Error");},
			()=> {this.log("completed");}
		)
	}
   log(message:any){
	this.messages.push(message);
     }
}