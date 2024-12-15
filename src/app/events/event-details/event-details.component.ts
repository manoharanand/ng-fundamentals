import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

//call this page from event service url like : /events/id
@Component({
    templateUrl: './event-details.component.html',
    styles: [` 
        .container {padding-left:20px; padding-right:20px}
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent{
    //inject the service here
    event:any
    constructor(private eventService:EventService, 
        private route:ActivatedRoute){

    }
    ngOnInit() {
        //get event is taking number so typecasting it using +
        this.event = this.eventService.getEvent(
            +this.route.snapshot.params['id']);
    }
}