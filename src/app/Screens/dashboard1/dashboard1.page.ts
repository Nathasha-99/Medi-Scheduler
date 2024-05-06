import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.page.html',
  styleUrls: ['./dashboard1.page.scss'],
})
export class Dashboard1Page implements OnInit {
  cells:any[] = [];
  dt = new Date();
  day:any;
  today:any;
  endDate:any;
  prevDate:any;


  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  currentMonth:any;
  currentYear:any;

  constructor() { }

  ngOnInit() {
    this.renderDate();
  }

  renderDate(){
    this.cells=[];
    this.dt.setDate(1);
    this.day = this.dt.getDay();
    this.today = new Date().getDate();

    this.endDate = new Date(
      this.dt.getFullYear(),
      this.dt.getMonth()+1,
      0
    ).getDate();
    // console.log(this.endDate);

    this.prevDate = new Date(
      this.dt.getFullYear(),
      this.dt.getMonth(),
      0
    ).getDate();
    // console.log(this.prevDate);

    this.currentMonth = this.months[this.dt.getMonth()];
    // console.log(this.currentMonth);

    this.currentYear = this.dt.getFullYear();
    // console.log(this.currentYear);

    let i:any;
    let j:any;

    for(j=1; j<=this.endDate; j++){
      let objData= {};
      let statusColor;

      let Daydate = new Date(this.currentYear,this.dt.getMonth(),j);
      let currDate= new Date();

      // console.log(currDate);
      // console.log(Daydate);

      if(currDate.toDateString()== Daydate.toDateString()){
        statusColor=true;
      }else{
        statusColor=false;
      }


      const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

      const daysOfWeekIndex = Daydate.getDay();
      const dayOfWeek = daysOfWeek[daysOfWeekIndex];
      objData = {date:j, day:dayOfWeek, isToday: statusColor}
      this.cells.push(objData);
      console.log(this.cells);
      

    }

  }



  moveDate(para:any){
    if(para=="prev"){
      this.dt.setMonth(this.dt.getMonth()-1);
    }else if(para == "next"){
      this.dt.setMonth(this.dt.getMonth()+1);
    }
    this.renderDate();
  }

  dateClicked(date:any){
    let clickedDate = new Date(this.currentYear,this.dt.getMonth(),date);
    console.log(clickedDate);

  }


}
