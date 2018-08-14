import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
// import 'fullCalendar';
import 'fullcalendar-scheduler';
import { Moment } from 'moment';

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
  @Output() onDayClicked = new EventEmitter();
  @Output() onEventClicked = new EventEmitter();
  @Output() onDaySelected = new EventEmitter();
  constructor() {

  }
  ngOnInit() {
    const thisRef = this;
    this.options = {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      themeSystem: 'bootstrap4',
      defaultView: 'month',
      selectable: true,
      placeholder: true,
      editable: true,
      height: 'parent',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      // weekNumbers: true,
      eventLimit: true, // allow "more" link when too many events
      resources: [
        { id: 'a', title: 'Room A' },
        { id: 'b', title: 'Room B' }
      ],
      dayClick: function (date: Moment) {
        thisRef.dayClicked(date);
      },
      select: function (startDate: Moment, endDate: Moment) {
        thisRef.daySelected(startDate, endDate);
      },
      eventClick: function (calEvent: any, jsEvent: any, view: any) {
        thisRef.eventClicked(calEvent, jsEvent, view);
      },
      eventRender: function (event, element) {
        console.log(event);
        var fcContent = element.find('.fc-content');
        let html = `
        <div class=".fc-content">
        <span class="fas fa-circle" style="color: #f44141"></span> 
        ${fcContent.html()}
        </div>`;
        element.html(html);
      },
      events: [
        {
          title: 'All Day Event',
          start: '2018-08-01'
        },
        {
          title: 'Long Event',
          start: '2018-08-08',
          end: '2018-08-10',
          color: '#95f442' // override!
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-08-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-08-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-08-11',
          end: '2018-08-13',
          color: 'purple' // override!
        },
        {
          title: 'Meeting',
          start: '2018-08-12T10:30:00',
          end: '2018-08-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-08-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-08-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-08-13T08:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-08-28'
        }
      ]
    };
    $('#calendar').fullCalendar(this.options);
    this.calendar = $('#calendar').fullCalendar('getCalendar');
    $('.fc-prev-button').click(function () {
      thisRef.prevClicked();
    });
    $('.fc-next-button').click(function () {
      thisRef.nextClicked();
    });
  }
  nextClicked() {
    this.onNext.emit();
  }
  prevClicked() {
    this.onPrev.emit();
  }
  dayClicked(date: Moment) {
    const event = {
      date: date
    };
    this.onDayClicked.emit(event);
  }
  eventClicked(calEvent: any, jsEvent: any, view: any) {
    const event = {
      calEvent: calEvent,
      jsEvent: jsEvent,
      view: view
    };
    this.onEventClicked.emit(event);
  }
  daySelected(startDate: Moment, endDate: Moment) {
    const event = {
      startDate: startDate,
      endDate: endDate
    };
    this.onDaySelected.emit(event);
  }
}
