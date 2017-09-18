import { Component, OnInit } from '@angular/core';
import { DateTimePickerService } from '../../../services/date-time-picker.service';

@Component({
  selector: 'app-date2',
  templateUrl: './date2.component.html',
  styleUrls: ['./date2.component.css']
})
export class Date2Component implements OnInit {
  private configDate2 = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY'
  };
  private configTime2 = {
    allowMultiSelect: true,
    format: 'hh:mm A'
  };
  private configDateTime2 = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY hh:mm A'
  };

  constructor(private dateformats: DateTimePickerService) { }

  ngOnInit() {
    this.configDate2.format = this.dateformats.formats.event_date;
    this.configTime2.format = this.dateformats.formats.time;
  }

}
