import { Component, OnInit } from '@angular/core';
import { DatePickerComponent } from '../../../components/date-picker/date-picker.component';
import { DateTimePickerService } from '../../../services/date-time-picker.service';


@Component({
  selector: 'date-time-picker-demo',
  templateUrl: './date-time-picker-demo.component.html',
  styleUrls: ['./date-time-picker-demo.component.css']
})
export class DateTimePickerDemoComponent implements OnInit {

  constructor(private datetimepickerService: DateTimePickerService) {
    this.datetimepickerService.conf0 = false;
    this.datetimepickerService.conf1 = true;
   }

  ngOnInit() {
  }

  datetickHandler(value) {
    if (value) {
      console.log('DateTick Hanlder  - ' + value);
    }
  }
}
