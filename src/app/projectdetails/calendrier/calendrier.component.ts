import { Component, Input, OnInit, Output } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-calendrier',
  template:'<ejs-schedule height="850" width="1250" [eventSettings]="eventObject" [currentView]="setView" [selectedDate]="setDATE" > </ejs-schedule>',
  //templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
})
export class CalendrierComponent implements OnInit {


  constructor() {}
  setDATE:Date = new Date(2022,11,11)
  public setView: View = 'Month';
  ngOnInit(): void {

  }

 

  private dataManager: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
 });
 
  public eventObject: EventSettingsModel = {
   
    dataSource: this.dataManager 
  }
}
