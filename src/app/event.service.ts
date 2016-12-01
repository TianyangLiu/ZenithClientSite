import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getHeader(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('suthorization','Bearer ${authToken}')
    return headers;
  }

  getAll(){
    return this.http.get('http://zenithwebsite20161130034422.azurewebsites.net/api/eventsapi').map((res: Response) => res.json());
  }

  getFeature(date: string){
    let headers = this.getHeader();
    return this.http.get('http://zenithwebsite20161130034422.azurewebsites.net/api/eventsapi/feature/'+date , {headers}).map((res: Response) => res.json());
  }

  getPass(date: string){
    let headers = this.getHeader();
    return this.http.get('http://zenithwebsite20161130034422.azurewebsites.net/api/eventsapi/pass/'+date, {headers}).map((res: Response) => res.json());
  }
}
