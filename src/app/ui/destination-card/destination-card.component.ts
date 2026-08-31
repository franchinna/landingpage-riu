import { Component, computed, input } from '@angular/core';
import { CalendarIconComponent } from '../calendar-icon/calendar-icon.component';
import { Destination } from '../../data/destination';

const ANCHOS = [400, 600, 900];

@Component({
  selector: 'app-destination-card',
  imports: [CalendarIconComponent],
  templateUrl: './destination-card.component.html',
  host: { class: 'block' },
})
export class DestinationCardComponent {
  readonly destination = input.required<Destination>();

  protected readonly src = computed(() => `${this.destination().image}-900.webp`);
  protected readonly srcset = computed(() =>
    ANCHOS.map((ancho) => `${this.destination().image}-${ancho}.webp ${ancho}w`).join(', '),
  );
}
