import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Api } from '../../services/api';


@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class LoginComponent {
  model: any = {};
  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private api: Api, private router: Router) { }

    ngOnInit(): void {
        // Check if the user is already logged in
        const token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['/books']);
        }
    }

    login() {
    this.api.login(this.model).subscribe(
      (response: any) => {
        if(!response || !response.token) {
          this.message = 'Login failed. Please try again.';
          this.messageType = 'error';
          return;
        }
        localStorage.setItem('token', response.token);
        this.router.navigate(['/books']);
         window.location.reload(); 
      },
      (error) => {
        this.message = 'Wrong username or password.';
        this.messageType = 'error';
        console.error(error);
      }
    );
  }

}
