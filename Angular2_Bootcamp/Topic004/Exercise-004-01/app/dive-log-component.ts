import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';
import {DiveLogApi} from './dive-log-api.service';

@Component({
	selector:'divelog',
		templateUrl: 'app/dive-log.template.html'
})

export class DiveLogComponent{
	loading = false;
	dive: DiveLogEntry[];
	constructor(private api:DiveLogApi){

	}

	refreshDives(){
		this.loading=true;
		//this.dives=[];
		var component = this;
//		setTimeout(function() => {
//			component.dives = component.api.getDives()
//			component.loading = false
//		}, 1000);
	}
}