import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true,

})
export class RegisterComponent {
  model: any = {};

  constructor(private api: Api, private router: Router) { }

  register() {
    this.api.register(this.model).subscribe(() => {
        alert('Registration successful! You can now log in.');
        this.router.navigate(['/login']);
      },
      (err) => {
        if (err.status === 409) {
          alert('User already exists. Please choose a different email or username.');
        } else {
          alert('An error occurred during registration.');
          console.error(err);
        }
      }
    );
  }

}
