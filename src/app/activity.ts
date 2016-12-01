export class Activity {
    activityId: number;
    activityDescription: string;
    creationDate: Date;

    constructor(obj?: any) {
        this.activityId = obj && obj.activityId || null;
        this.activityDescription = obj && obj.activityDescription || null;
        this.creationDate = obj && obj.creationDate || null;
    }
}
