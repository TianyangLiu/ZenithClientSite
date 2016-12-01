import{ Activity } from "./Activity" 

export class Event {
    eventId: number;
    eventFrom: Date;
    eventTo: Date;
    enteredByUsername: string;
    activityId: number;
    activity: Activity;
    creationDate: Date;
    isActive: boolean;

    constructor(obj?: any) {
        this.eventId = obj && obj.eventId || null;
        this.eventFrom = obj && obj.eventFrom || null;
        this.eventTo = obj && obj.eventTo || null;
        this.enteredByUsername = obj && obj.enteredByUsername || null;
        this.activityId = obj && obj.activityId || null;
        this.activity = obj && obj.activity || null;
        this.creationDate = obj && obj.creationDate || null;
        this.isActive = obj && obj.isActive || null;
    }
}
