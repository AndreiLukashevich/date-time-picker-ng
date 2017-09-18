import { Component, OnInit } from '@angular/core';
import { DateTimePickerService } from '../../../services/date-time-picker.service';

@Component({
  selector: 'app-date0',
  templateUrl: './date0.component.html',
  styleUrls: ['./date0.component.css']
})
export class Date0Component implements OnInit {
  private configDate0 = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY'
  };
  private configTime0 = {
    allowMultiSelect: true,
    format: 'hh:mm A'
  };
  private configDateTime0 = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY hh:mm A'
  };

  constructor(private dateformats: DateTimePickerService) { }

  ngOnInit() {
    this.configDate0.format = this.dateformats.formats.date;
  }

}
