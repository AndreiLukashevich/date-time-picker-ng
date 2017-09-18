import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Date0Component } from './components/date0/date0.component';
import { Date1Component } from './components/date1/date1.component';
import { Date2Component } from './components/date2/date2.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'date-time-picker-demo',
                loadChildren: './components/date-time-picker-demo/date-time-picker-demo.module#DateTimePickerDemoModule'
            }
        ]),
        RouterModule.forChild([
            {
                path: 'date0',
                component: Date0Component
            },
            {
                path: 'date1',
                component: Date1Component
            },
            {
                path: 'date2',
                component: Date2Component
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
