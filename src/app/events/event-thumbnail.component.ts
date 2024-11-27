import { Component , Input, Output, EventEmitter} from "@angular/core";

//Write basic componet code first
@Component({
    selector: 'event-thumbnail',
    templateUrl: './events-list.component.html',
    styles: [`
            .pad-left {margin-let: 10px},
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