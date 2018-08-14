import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
// import 'fullCalendar';
import 'fullcalendar-scheduler';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendar: any;
  @Input() options;
  @Output() onNext = new EventEmitter();
  @Output() onPrev = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.options = {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      themeSystem: 'bootstrap4',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      weekNumbers: true,
      eventLimit: true, // allow "more" link when too many events
      events: 'https://fullcalendar.io/demo-events.json'
    };
    $('#calendar').fullCalendar(this.options);
    this.calendar = $('#calendar').fullCalendar('getCalendar');
  }
}
