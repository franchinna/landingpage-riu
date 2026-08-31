import { Component, input } from '@angular/core';
import { DownloadIconComponent } from '../download-icon/download-icon.component';
import { Experience } from '../../data/experience';

@Component({
  selector: 'app-experience-card',
  imports: [DownloadIconComponent],
  templateUrl: './experience-card.component.html',
  host: { class: 'block' },
})
export class ExperienceCardComponent {
  readonly experience = input.required<Experience>();
}
