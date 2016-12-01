import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EventService} from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  results: Array<Event>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAll().subscribe(
      data => { this.results = data; },
      error => console.log(error)
    );
    localStorage.setItem('time','0');
  }

  feature() {
    var date = new Date();
    let numberOfWeek = +localStorage.getItem('time');
    var nextweek = new Date(date.getTime() + numberOfWeek*((24*60*60*1000)*7));
    var timestring = nextweek.getFullYear() +"-"+(nextweek.getMonth()+1)+"-"+nextweek.getDate(); 
    this.eventService.getFeature(timestring).subscribe(
      data => { this.results = data; },
      error => console.log(error)
    );
    localStorage.setItem('time',''+(numberOfWeek+1));
  }

  pass() {
    var date = new Date();
    let numberOfWeek = +localStorage.getItem('time');
    var passweek = new Date(date.getTime() + numberOfWeek*((24*60*60*1000)*7));
    var timestring = passweek.getFullYear() +"-"+(passweek.getMonth()+1)+"-"+passweek.getDate(); 
    this.eventService.getPass(timestring).subscribe(
      data => { this.results = data; },
      error => console.log(error)
    );
    localStorage.setItem('time',''+(numberOfWeek-1));
  }

}
