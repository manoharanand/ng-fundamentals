import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
// declare let toastr:any
@Component({
    // selector: 'events-list',
    template: `
    <div>
        <h1> Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)"
                [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>`
})
//<h2>{{event.name}}</h2> this is interpolation and represents one way binding
export class EventsListComponent {
    //this data would come from Api call
    
    //inject the service here
    events:any []
    //injects all services here in this constructor
    constructor (private eventService: EventService, private toastr:ToastrService) {
        // this.events = this.eventService.getEvents();
    }
    ngOnInit() {//this event fetch data from 
        this.events = this.eventService.getEvents();
    }

    handleEventClicked(data) {
        console.log("received data: ", data)
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
    }
}

