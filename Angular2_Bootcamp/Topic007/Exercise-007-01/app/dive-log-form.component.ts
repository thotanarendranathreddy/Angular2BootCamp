import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DiveLogEntry } from './deive-log-entry';
@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html'

})
export class LogComponent implements OnInit{
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
    @Input() diveLogForm: FormGroup;
    ngOnInit(){
        this.diveLogForm = new FormGroup({
            site: new FormControl(this.entry.site, Validators.required),
            location: new FormControl(this.entry.location, Validators.required),
            depth: new FormControl(this.entry.depth, Validators.required),
            time: new FormControl(this.entry.time, Validators.required),
            isFavorite: new FormControl(this.entry.isFavorite),
            special: new FormControl(this.entry.special),
            comments: new FormControl(this.entry.comments)
        })
    }

isInvalid(controlName:string){
    return this.diveLogForm.controls[controlName].invalid;
}
    submitedDive: DiveLogEntry;

    submitForm(){
        this.submitedDive = this.diveLogForm.value;
        this.submited=true;
    }
}
