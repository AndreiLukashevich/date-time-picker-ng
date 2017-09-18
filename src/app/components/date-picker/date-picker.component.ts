import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { DateTimePickerService } from '../../services/date-time-picker.service';

@Component({
  moduleId: module.id,
  selector: 'date-picker',
  templateUrl: 'date-picker.component.html',
  styleUrls: ['date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  private conf0;
  private conf1;

  @Output()
  datetick: EventEmitter<any> = new EventEmitter();

  private config0 = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY'
  };

  private config1 = {
    allowMultiSelect: true,
    format: 'D MMM YYYY'
  };


  public date: any = 0;

  constructor(private datetimepickerService: DateTimePickerService) {
    this.conf0 = datetimepickerService.conf0;
    this.conf1 = datetimepickerService.conf1;
  }

  ngOnInit() {
  }

  getDate(e) {
    this.date = e;
    this.callback(e);
  }

  private callback(e) {
    this.date = e;
    this.datetick.emit(this.date);
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DpDatePickerModule
  ],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent],
  providers: [DateTimePickerService]
})
export class DatePickerModule { }