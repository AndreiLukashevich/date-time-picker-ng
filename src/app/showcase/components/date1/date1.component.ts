import { Component, OnInit } from '@angular/core';
import { DateTimePickerService } from '../../../services/date-time-picker.service';

@Component({
  selector: 'app-date1',
  templateUrl: './date1.component.html',
  styleUrls: ['./date1.component.css']
})
export class Date1Component implements OnInit {
  private configDate1 = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY'
  };
  private configTime1 = {
    allowMultiSelect: true,
    format: 'hh:mm A'
  };
  private configDateTime1 = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY hh:mm A'
  };

  constructor(private dateformats: DateTimePickerService) { }

  ngOnInit() {
    this.configDate1.format = this.dateformats.formats.iso_date;
    this.configTime1.format = this.dateformats.formats.iso_time;
    this.configDateTime1.format = this.dateformats.formats.iso_date + ' ' + this.dateformats.formats.iso_time;
  }

}
