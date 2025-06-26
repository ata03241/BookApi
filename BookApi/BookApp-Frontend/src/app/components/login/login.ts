import { CommonModule } from '@angular/common';
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

  constructor(private api: Api, private router: Router) { }

    login() {
    this.api.login(this.model).subscribe(
      (response: any) => {
        if(!response || !response.token) {
          alert("Login failed. Please try again.");
          return;
        }
        localStorage.setItem('token', response.token);
        this.router.navigate(['/books']);
      },
      (error) => {
        alert('wrong username or password');
        console.error(error);
      }
    );
  }

}
