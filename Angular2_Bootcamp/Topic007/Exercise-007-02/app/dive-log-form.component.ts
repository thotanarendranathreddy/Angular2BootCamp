import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DiveLogEntry } from './dive-log-entry';
import {FormBuilder, AbstractControl} from '@angular/forms';
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

	constructor(private builder: FormBuilder){}

    @Input() diveLogForm: FormGroup;


    depthValidator(control: AbstractControl): {[key: string]:any} {
        let value = control.value;
        if(!value) return {required: true};
        if(isNaN(value)){
            return {NaN:true};
        }else {
            let depth = parseInt(value,10);
            if(depth>=0 && depth <= 130){
                return null;
            }
        }
        return {depth: {min:0, max:130}};
    }

    timeValidator(control: AbstractControl): {[key: string]:any} {
        let value = control.value;
        if(!value) return {required: true};
        if(isNaN(value)){
            return {NaN:true};
        }else {
            let time = parseInt(value,10);
            if(time>=0 && time <= 130){
                return null;
            }
        }
        return {time: {min:0, max:130}};
    }
    siteValidator(control: AbstractControl): {[key: string]:any} {
        let value = control.value;
        if(!value) return {required: true};
        if(isNaN(value)){
            return {NaN:true};
        }else {
            let site = parseInt(value,10);
            if(time>=0 && time <= 130){
                return null;
            }
        }
        return {time: {min:0, max:130}};
    }
    getValidationMessage(controlName:string){
        let message = '';
        let control = this.diveLogForm.get(controlName);
        if(control){
            let messages = this.validationMessages[controlName];
            if(messages && control.errors){
                for(const key in control.errors){
                    message +=messages[key] + '';
                }
            }
        }
        return message == ''? 'control value is invalid' : message;
    }

    validationMessages = {
        site : {
            required : 'please specify the site name'
        },
        location : {
            required : 'please specify the location name'
        },
        depth : {
            required : 'please specify the depth',
            NaN: 'value must be number',
            depth: 'Depth must be between 0 and 130'
        },
        time : {
            required : 'please specify the depth',
            NaN: 'value must be number',
            time: 'time must be between 0 and 130'
        }
    }


    ngOnInit(){
        this.diveLogForm = this.builder.group({
            site: [this.entry.site, Validators.required],
            location: [this.entry.location, Validators.required],
            depth: [this.entry.depth, this.depthValidator],
            time: [this.entry.time, this.timeValidator],
            isFavorite: [this.entry.isFavorite],
            special: [this.entry.special],
            comments: [this.entry.comments]
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
