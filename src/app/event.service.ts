import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getHeader(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization','Bearer '+ authToken);
    headers.append("Access-Control-Allow-Origin",'*');
    return headers;
  }

  getAll(){
    return this.http.get('http://zenithwebsite20161130034422.azurewebsites.net/api/eventsapi').map((res: Response) => res.json());
  }

  getFeature(date: string){
    let headers = this.getHeader();
    return this.http.get('http://zenithwebsite20161130034422.azurewebsites.net/api/eventsapi/feature/'+date , {headers: headers}).map((res: Response) => res.json());
  }

  getPass(date: string){
    let headers = this.getHeader();
    return this.http.get('http://zenithwebsite20161130034422.azurewebsites.net/api/eventsapi/pass/'+date,{headers: headers}).map((res: Response) => res.json());
  }
}
