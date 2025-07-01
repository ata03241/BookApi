import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,

})
export class App {
  protected title = 'BookApp-Frontend';

  protected isLoggedIn = false;

  constructor(private router: Router) {
    // Check if the user is logged in
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isDarkMode = false;

  ngOnInit() {
    const saved = localStorage.getItem('darkMode');
    this.isDarkMode = saved === 'true';
    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.updateBodyClass();
  }

  updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

}
