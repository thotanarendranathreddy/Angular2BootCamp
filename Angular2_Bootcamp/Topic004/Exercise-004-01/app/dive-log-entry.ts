import {Component} from '@angular/core';


@Component({
    selector: 'divelog',
    templateUrl: 'app/divelog.template.html'

})

export class DiveLogEntry{
    site:string;
    location:String;
    depth:number;
    time:number;

    static stockDives: DiveLogEntry[] = [{
    site: 'Panama Lagoon',
    location : 'London, England',
    depth:72,
    time : 54
},
{
    site: 'Avenue Pool',
    location : 'NewJersy, Newyork',
    depth:98,
    time : 62
},

{
    site: 'MonoLass',
    location : 'SwissAlps, Swizerland',
    depth:54,
    time : 38
}
];

}
