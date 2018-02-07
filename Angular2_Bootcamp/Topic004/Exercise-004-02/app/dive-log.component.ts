import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';
import {DiveLogApi} from './dive-log-api.service';

@Component({
    selector: 'divelog',
    templateUrl: 'app/divelog.template.html',
    
})

export class DiveLogComponent{
    loading = false;
    errorMessage = null;
    dives:DiveLogEntry[];

    constructor(private api:DiveLogApi){

    }

    refreshDives() {
        this.loading = true;
        this.dives = [];
        this.errorMessage = null;

        this.api.getDives()
        .then(data => {
                this.dives=data;
                this.loading=false;
            }, errMsg => {
                alert(errMsg + 'Error Message');
                this.errorMessage = errMsg;
                this.loading=false;
            });
    }

}
