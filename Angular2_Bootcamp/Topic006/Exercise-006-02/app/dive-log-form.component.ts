import { Component } from '@angular/core';
import { DiveLogEntry } from './deive-log-entry';
@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html'

})
export class LogComponent {
    submited:boolean=false;
  specialDives = [

      "Night dive",
      "Deep dive",
      "Cave dive"

  ]
entry: DiveLogEntry = {
  site: 'Kovalam',
  location: 'Kerala, India',
  depth:125,
  time:56,
  isFavorite: true,
  special: 'Deep dive'
      }
    submitForm(){
        this.submited=true;
    }
}
