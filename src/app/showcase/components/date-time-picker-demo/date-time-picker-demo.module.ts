import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerDemoComponent } from './date-time-picker-demo.component';
import { DateTimePickerDemoRoutingModule } from './date-time-picker-demo-routing.module';

import { DatePickerModule } from '../../../components/date-picker/date-picker.component';
import { DateTimePickerModule } from '../../../components/date-time-picker/date-time-picker.component';
import { TimePickerModule } from '../../../components/time-picker/time-picker.component';
import { DateTimePickerService } from '../../../services/date-time-picker.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DateTimePickerDemoRoutingModule,
        DatePickerModule,
        DateTimePickerModule,
        TimePickerModule
    ],
    declarations: [
        DateTimePickerDemoComponent
    ],
    providers: [DateTimePickerService]
})
export class DateTimePickerDemoModule { }