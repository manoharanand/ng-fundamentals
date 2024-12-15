import { Component , Input, Output, EventEmitter} from "@angular/core";

//Write basic componet code first
@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail"> 
        <h1> {{event.name}}</h1>
            <div>Date: {{event.date}}</div>
            <div [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'"> (Early start) </span>
                <span *ngSwitchCase="'10:00 am'"> (Late start) </span>
                <span *ngSwitchDefault> (Normal start) </span>
            </div>
            <div>Price: \${{event.price}}</div>
            <div *ngIf="event?.location">
                <span> Location: {{event.location.address}}</span>
                <span class="pad-left">{{event.location.city}}, 
                    {{event.location.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles: [`
            .thumbnail {min-height: 210px; }
            .pad-left {margin-let: 10px; },
            .well div { color: #bbb; }
        `]
})

export class EventThumbnailComponent {
    //decorator to accept input from other component
@Input() event:any
// @Output() eventClick = new EventEmitter()

// handleClickMe(){
//     this.eventClick.emit(this.event.name)
// }
    someProperty:any = "some value in child component"
    logFoo(){
        console.log('foo')
    }
}