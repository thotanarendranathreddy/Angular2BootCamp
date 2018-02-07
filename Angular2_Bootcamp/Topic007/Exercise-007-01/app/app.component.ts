import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template : `
  <div class="container-fluid">
  <h1> Enter a new Dive Log Record </h1>
  <dive-log-form></dive-log-form>
  </div>
  `
})
export class AppComponent { }
