import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  nextClicked() {
    console.log('nextClicked');
  }
  dayClicked(event: any) {
    console.log(event);
  }
  eventClicked(event: any) {
    console.log(event);
  }
}
