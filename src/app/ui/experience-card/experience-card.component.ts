import { Component, input } from '@angular/core';
import { Experience } from '../../data/experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  host: { class: 'block' },
})
export class ExperienceCardComponent {
  readonly experience = input.required<Experience>();
}
