import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent} from 'ionic2-calendar';
import { CalendarMode, Step } from 'ionic7-calendar/calendar.interface';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource=[];
  viewTitle!: string;

  calendar={
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent)  myCal!: CalendarComponent;
  constructor() { }

  ngOnInit() {
  }

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title: string){
    this.viewTitle=title;
  }

  
}
