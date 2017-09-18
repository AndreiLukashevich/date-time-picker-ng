import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {DpDatePickerModule} from 'ng2-date-picker';

import { AppComponent } from './app.component';
import { Date0Component } from './components/date0/date0.component';
import { Date1Component } from './components/date1/date1.component';
import { Date2Component } from './components/date2/date2.component';

import { DateTimePickerService } from '../services/date-time-picker.service';

@NgModule({
  declarations: [
    AppComponent,
    Date0Component,
    Date1Component,
    Date2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule
  ],
  providers: [DateTimePickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
