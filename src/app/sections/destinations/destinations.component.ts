import { Component } from '@angular/core';
import { DestinationCardComponent } from '../../ui/destination-card/destination-card.component';
import { DESTINATIONS } from '../../data/destination';

@Component({
  selector: 'app-destinations',
  imports: [DestinationCardComponent],
  templateUrl: './destinations.component.html',
  host: { class: 'block' },
})
export class DestinationsComponent {
  protected readonly destinations = DESTINATIONS;
}
