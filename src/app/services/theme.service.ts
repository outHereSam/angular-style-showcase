import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = 'light';

  constructor() {}

  toggleTheme() {
    // this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light');
    if (this.theme === 'light') {
      this.theme = 'dark';

      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      this.theme = 'light';
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}
