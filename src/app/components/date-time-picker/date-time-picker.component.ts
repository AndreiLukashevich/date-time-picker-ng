import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpDatePickerModule } from 'ng2-date-picker';

@Component({
  moduleId: module.id,
  selector: 'date-time-picker',
  templateUrl: 'date-time-picker.component.html',
  styleUrls: ['date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit {
  config = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY hh:mm A'
  };

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    CommonModule,
    DpDatePickerModule
  ],
  exports: [DateTimePickerComponent],
  declarations: [DateTimePickerComponent]
})
export class DateTimePickerModule { }
