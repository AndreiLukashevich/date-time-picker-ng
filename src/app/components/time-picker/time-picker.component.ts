import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';
import { DateTimePickerService } from '../../services/date-time-picker.service';

@Component({
  moduleId: module.id,
  selector: 'time-picker',
  templateUrl: 'time-picker.component.html',
  styleUrls: ['time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  @Output()
  timetick: EventEmitter<any> = new EventEmitter();

  private configTime;
  private time: any;

  constructor(private datetimepickerService: DateTimePickerService) {
    this.configTime = datetimepickerService.configTime;
  }

  ngOnInit() {
  }

  getTime(e) {
    this.callback(e);
  }

  private callback(e) {
    this.time = e;
    this.timetick.emit(this.time);
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DpDatePickerModule
  ],
  exports: [TimePickerComponent],
  declarations: [TimePickerComponent],
  providers: [DateTimePickerService]
})
export class TimePickerModule { }
