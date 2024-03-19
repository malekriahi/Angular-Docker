import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http:HttpClient) { }
  getEvents()
  {
    return this.http.get('http://localhost:3000/events')
  }
  addEvent (event: Event)
  {
    return this.http.post('http://localhost:3000/events', event)
  }
  DeleteEvent(e: Event)
  {
    return this.http.delete('http://localhost:3000/events')
  }
  
}
