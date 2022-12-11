import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectdetailsRoutingModule } from './projectdetails-routing.module';
import { AddprojectdetailsComponent } from './addprojectdetails/addprojectdetails.component';
import { ListprojectdetailsComponent } from './listprojectdetails/listprojectdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ScheduleModule,
  RecurrenceEditorModule,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';
import { CalendrierComponent } from './calendrier/calendrier.component';
@NgModule({
  declarations: [AddprojectdetailsComponent, ListprojectdetailsComponent, CalendrierComponent],
  imports: [
    CommonModule,
    ProjectdetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule,
    RecurrenceEditorModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
  ],
})
export class ProjectdetailsModule {}
