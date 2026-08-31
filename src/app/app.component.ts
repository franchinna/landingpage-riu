import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
