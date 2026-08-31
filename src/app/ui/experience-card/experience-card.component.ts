import { Component, computed, input } from '@angular/core';
import { DownloadIconComponent } from '../download-icon/download-icon.component';
import { Experience } from '../../data/experience';

const ANCHOS = [300, 450];

@Component({
  selector: 'app-experience-card',
  imports: [DownloadIconComponent],
  templateUrl: './experience-card.component.html',
  host: { class: 'block' },
})
export class ExperienceCardComponent {
  readonly experience = input.required<Experience>();

  protected readonly src = computed(() => `${this.experience().image}-450.webp`);
  protected readonly srcset = computed(() =>
    ANCHOS.map((ancho) => `${this.experience().image}-${ancho}.webp ${ancho}w`).join(', '),
  );
}
