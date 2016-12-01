import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {

  constructor(private http: Http) { }

  //getAll(){
  //  return this.http.get('').map((res: Response) => res.json());
  //}

}
