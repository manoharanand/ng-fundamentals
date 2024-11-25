import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
        <div> 
            <h1> Upcoming Angular Events </h1>
            <hr/>
            <div class="well hoverwell thumbnail"> 
                <h2>{{event.name}}</h2>
                <div> Date: {{event.date}}</div>
                <div> Time: {{event.time}}</div>
                <div> Price: \${{event.price}}</div>
                <div>
                    <span> Location: {{event.location.address}}</span>
                    <span> &nbsp;</span>
                    <span>{{event.location.city}}, {{event.location.country}}</span>
                </div>
            </div>
        </div>
    `
})
//<h2>{{event.name}}</h2> this is interpolation and represents one way binding
export class EventsListComponent {
    event = {
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