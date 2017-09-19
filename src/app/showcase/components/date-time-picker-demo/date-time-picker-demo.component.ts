import { Component, OnInit } from '@angular/core';
import { DateTimePickerService } from '../../../services/date-time-picker.service';


@Component({
  selector: 'date-time-picker-demo',
  templateUrl: './date-time-picker-demo.component.html',
  styleUrls: ['./date-time-picker-demo.component.css']
})
export class DateTimePickerDemoComponent implements OnInit {

  constructor(private datetimepickerService: DateTimePickerService) {
    this.datetimepickerService.configDate.format = datetimepickerService.formats.event_date;
    this.datetimepickerService.configDateTime.format = datetimepickerService.formats.iso_date + ' '
      + datetimepickerService.formats.iso_time;
    this.datetimepickerService.configTime.format = datetimepickerService.formats.event_time;
  }

  ngOnInit() {
  }

  datetickHandler(value) {
    if (value) {
      console.log('DateTick Hanlder  - ' + value);
    }
  }

  datetimetickHandler(value) {
    if (value) {
      console.log('DateTimeTick Hanlder  - ' + value);
    }
  }

  timetickHandler(value) {
    if (value) {
      console.log('TimeTick Hanlder  - ' + value);
    }
  }

}
