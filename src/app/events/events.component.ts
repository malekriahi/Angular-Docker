import { Component } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { Event } from '../models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  listEvents : Event [] = [];
  constructor(private Es:EventServiceService,private r:Router) {
    this.Es.getEvents().subscribe({
      next:(data)=>this.listEvents = data as Event []
    })
  }


  

}
