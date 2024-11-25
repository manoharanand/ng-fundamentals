import { Component , Input} from "@angular/core";

//Write basic componet code first
@Component({
    selector: 'event-thumbnail',
    templateUrl: './events-list.component.html'
})

export class EventThumbnailComponent {
    //decorator to accept input from other component
@Input() event:any
}