import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { DestinationsComponent } from './sections/destinations/destinations.component';
import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, DestinationsComponent, ExperiencesComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
