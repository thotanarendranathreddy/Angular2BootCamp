import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/dive-log.template.html'
})
export class AppComponent { 

public  dives = [
    {
        site:'Narendranath Reddy',
        location: 'Kadapa, India'
        depth: 72,
        time: 54
},
{
    site:'Alex',
        location: 'Kerala, India'
        depth: 98,
        time: 62
},
{
    site:'Mason',
        location: 'Bangalore, India'
        depth: 54,
        time: 38
}
];

 }
