import {Component, Input} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs';
@Component({
	selector: 'mousepad',
	template: `
	<div class="col-sm-12"
				(mousemove) = "onMouseMove($event)"
				(click) = "onClick()">
	 </div>

	`,
	styles:[`
	div {
	margin : 24px 0;
	background-color: #e0e0e0;
	border: 1px dotted #808080;
	height: 300px;

	}
	`]
})
export class MousePadComponent{
//MoueseEvent is the observer and eventSource is subject so if any change in subject it trigger oin observer
	counter = 0;
	private eventSource = new Subject<MouseEvent>();
	mouseEvents = this.eventSource.asObservable();
	onMouseMove(e: mouseEvent){
		this.counter++;
		if(this.counter % 10 == 0){
			this.eventSource.next(e);
		}
		if(this.counter % 200 == 0){
			this.eventSource.error("error");
		}
	}
	onClick(){
		this.eventSource.complete();
	}
}