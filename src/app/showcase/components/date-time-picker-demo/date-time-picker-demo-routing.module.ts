import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DateTimePickerDemoComponent } from './date-time-picker-demo.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: DateTimePickerDemoComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DateTimePickerDemoRoutingModule { }
