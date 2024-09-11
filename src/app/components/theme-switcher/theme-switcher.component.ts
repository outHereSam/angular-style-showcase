import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.sass',
})
export class ThemeSwitcherComponent {
  constructor(protected themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
