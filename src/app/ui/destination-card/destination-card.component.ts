import { Component, input } from '@angular/core';
import { CalendarIconComponent } from '../calendar-icon/calendar-icon.component';
import { Destination } from '../../data/destination';

@Component({
  selector: 'app-destination-card',
  imports: [CalendarIconComponent],
  templateUrl: './destination-card.component.html',
  host: { class: 'block' },
})
export class DestinationCardComponent {
  readonly destination = input.required<Destination>();
}
