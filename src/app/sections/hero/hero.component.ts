import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { CalendarIconComponent } from '../../ui/calendar-icon/calendar-icon.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, CalendarIconComponent],
  templateUrl: './hero.component.html',
  host: { class: 'block' },
})
export class HeroComponent {}
