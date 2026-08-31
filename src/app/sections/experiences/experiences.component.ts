import { Component } from '@angular/core';
import { ExperienceCardComponent } from '../../ui/experience-card/experience-card.component';
import { EXPERIENCES } from '../../data/experience';

@Component({
  selector: 'app-experiences',
  imports: [ExperienceCardComponent],
  templateUrl: './experiences.component.html',
  host: { class: 'block' },
})
export class ExperiencesComponent {
  protected readonly experiences = EXPERIENCES;
}
