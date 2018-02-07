import {Component, AfterViewInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {MousePadComponent} from './mousepad.component';

@Component({

	selector:'my-app',
	template:`
	<div class="container">
		<mousepad></mousepad>
		<div [style.margin-bottom.px]="2">
		<button class="btn btn-primary"
		(click) = "resume()">
		resume
		</button>
		</div>
		<log-board [messages]="messages"></log-board>
	</div>
	`

})
export class AppComponent implements AfterViewInit{
	@ViewChild(MousePadComponent) mousepad: MousePadComponent;
	messages: any[] =[];
	counter = 0;
	ngAfterViewInit(){
	this.subscribe();
	}
	subscribe(){

		this.mousepad.mouseEvents.subscribe(
			(m: MouseEvent) => {
				this.log(`(${m.clientX}, ${m.clientY}`);
			},
			()=> {this.log("Error");},
			()=> {this.log("completed");}
		)
	}
	resume(){
		if(this.mousepad.isStopped){
			this.mousepad.createStream();
			this.subscribe();
		}
	}
   log(message:any){
	this.messages.push(message);
     }
}