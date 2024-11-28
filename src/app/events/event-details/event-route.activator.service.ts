import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot) {
        //typecasting is must for getEvent to make it number
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        console.log("Event status:" , eventExists)
        if(!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }
}