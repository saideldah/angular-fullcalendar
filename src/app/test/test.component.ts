import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
// import 'fullCalendar';
import 'fullcalendar-scheduler';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  calendar: any;
  constructor() { }
  ngOnInit() {
    const options = {
      header: {
        left: 'promptResource today prev,next',
        center: 'title',
        right: 'timelineDay,timelineWeek'
      },
      customButtons: {
        promptResource: {
          text: '+ room',
          click: function () {
            const title = prompt('Room name');
            if (title) {
              $('#calendar').fullCalendar(
                'addResource',
                { title: title },
                true // scroll to the new resource?
              );
            }
          }
        }
      },
      defaultView: 'timelineDay',
      resourceLabelText: 'Rooms',
      resources: [
        { id: 'a', title: 'Auditorium A' },
        { id: 'b', title: 'Auditorium B' },
        { id: 'c', title: 'Auditorium C' },
        { id: 'd', title: 'Auditorium D' },
        { id: 'e', title: 'Auditorium E' },
        { id: 'f', title: 'Auditorium F' },
        { id: 'g', title: 'Auditorium G' },
        { id: 'h', title: 'Auditorium H' },
        { id: 'i', title: 'Auditorium I' },
        { id: 'j', title: 'Auditorium J' },
        { id: 'k', title: 'Auditorium K' },
        { id: 'l', title: 'Auditorium L' },
        { id: 'm', title: 'Auditorium M' },
        { id: 'n', title: 'Auditorium N' },
        { id: 'o', title: 'Auditorium O' },
        { id: 'p', title: 'Auditorium P' },
        { id: 'q', title: 'Auditorium Q' },
        { id: 'r', title: 'Auditorium R' },
        { id: 's', title: 'Auditorium S' },
        { id: 't', title: 'Auditorium T' },
        { id: 'u', title: 'Auditorium U' },
        { id: 'v', title: 'Auditorium V' },
        { id: 'w', title: 'Auditorium W' },
        { id: 'x', title: 'Auditorium X' },
        { id: 'y', title: 'Auditorium Y' },
        { id: 'z', title: 'Auditorium Z' }
      ]
    };
    $('#calendar').fullCalendar(options);
    this.calendar = $('#calendar').fullCalendar('getCalendar');
  }
  next() {
    console.log('next');
    this.calendar.next();
  }
  prev() {
    console.log('prev');
    this.calendar.prev();
  }

}
