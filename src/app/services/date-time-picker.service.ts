import { Injectable } from '@angular/core';

@Injectable()
export class DateTimePickerService {

    public formats: any = {
        date: 'D MMM YYYY',
        new_format_date: 'D MMM YYYY',
        time: 'LT',
        iso_date: 'YYYY-MM-DD',
        iso_time: 'HH:mm',
        event_date: 'dddd, D MMMM YYYY',
        formatWeekTitle: 'MMMM YYYY',
        event_time: 'hh:mm A (UTCZ)',
        session_date: 'D MMM YYYY',
        session_time: 'hh:mm A (UTCZ)'
    };

    public configDate = {
        allowMultiSelect: true,
        format: 'MM/DD/YYYY'
    };

    public configDateTime = {
        allowMultiSelect: true,
        format: 'MM/DD/YYYY hh:mm A'
    };

    public configTime = {
        format: 'hh:mm A'
    };
}
