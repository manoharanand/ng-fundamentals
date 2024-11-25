import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <hr/>
        <event-thumbnail [event] = "event1"></event-thumbnail>
    </div>`
})
//<h2>{{event.name}}</h2> this is interpolation and represents one way binding
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '25/11/2024',
        time: '10:00 Am',
        price: '60',
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: 'Punaichak',
            city: 'Patna',
            country: 'India'
        }
    }
}