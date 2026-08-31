import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { DestinationsComponent } from './sections/destinations/destinations.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, DestinationsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
