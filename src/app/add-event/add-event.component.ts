import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';
import { Event } from '../models/Event';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  constructor(private r:Router,
    private Es: EventServiceService){}

   
  AddEvent = new FormGroup({
    name : new FormControl (''),
    nbParticipant : new FormControl(0,[
      Validators.max(1000),
    ]),
    price : new FormControl(0,[
      Validators.min(0),
    ]),
    category : new FormControl('')
  });
  get name () {
    return this.AddEvent.get('name');
  }
  get nbParticipant () {
    return this.AddEvent.get('nbParticipant');
  }
  get price () {
    return this.AddEvent.get('price');
  }
  get category () {
    return this.AddEvent.get('category');
  }

  AEvent ()
  {
    
    
    this.Es.addEvent(this.AddEvent.value as Event).subscribe({
      next:()=>this.r.navigate(['/events'])
    })
  }


}
