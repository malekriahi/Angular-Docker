import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountComponent } from './not-fount/not-fount.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {path: 'addevent', component:AddEventComponent},
  {path: 'events', component:EventsComponent},
  {path: '**', component:NotFountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
