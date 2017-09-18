import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DpDatePickerModule } from 'ng2-date-picker';

@Component({
  moduleId: module.id,
  selector: 'time-picker',
  templateUrl: 'time-picker.component.html',
  styleUrls: ['time-picker.component.css']
})
export class TimePickerComponent implements OnInit {
  config = {
    format: 'hh:mm A'
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
  exports: [TimePickerComponent],
  declarations: [TimePickerComponent]
})
export class TimePickerModule { }
