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

  @Output()
  datetick: EventEmitter<any> = new EventEmitter();

  private configDate;
  private date: any;

  constructor(private datetimepickerService: DateTimePickerService) {
    this.configDate = datetimepickerService.configDate;
  }

  ngOnInit() {
  }

  getDate(e) {
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