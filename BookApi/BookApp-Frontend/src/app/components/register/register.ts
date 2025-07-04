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
  message: string = '';
  messageType: 'success' | 'error' | '' = '';
 

  constructor(private api: Api, private router: Router) { }

  register() {
    this.api.register(this.model).subscribe(() => {
        this.message = 'Registration successful! You can now log in.';
        this.messageType = 'success';
        this.router.navigate(['/login']);
        
      },
      (err) => {
        if (err.status === 409) {
        this.message = 'User already exists.';
        this.messageType = 'error';
      } else {
        this.message = 'An error occurred during registration.';
        this.messageType = 'error';
        console.error(err);
      }
      }
    );
  }

}
