import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { DateTimePickerService } from '../../services/date-time-picker.service';

@Component({
  moduleId: module.id,
  selector: 'date-time-picker',
  templateUrl: 'date-time-picker.component.html',
  styleUrls: ['date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit {

  @Output()
  datetimetick: EventEmitter<any> = new EventEmitter();

  private configDateTime;
  private datetime: any;

  constructor(private datetimepickerService: DateTimePickerService) {
    this.configDateTime = datetimepickerService.configDateTime;
  }

  ngOnInit() {
  }

  getDateTime(e) {
    this.callback(e);
  }

  private callback(e) {
    this.datetime = e;
    this.datetimetick.emit(e);
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DpDatePickerModule
  ],
  exports: [DateTimePickerComponent],
  declarations: [DateTimePickerComponent],
  providers: [DateTimePickerService]
})
export class DateTimePickerModule { }
