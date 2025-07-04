import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-my-quotes',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './my-quotes.html',
  styleUrl: './my-quotes.css',
  standalone: true,
  providers: [Api]
})
export class MyQuotesComponent {
  quotes: any[] = [];

  constructor(private api: Api) {  }

  ngOnInit(): void {
    this.api.getQuotes().subscribe(
      (data: any[]) => {
        this.quotes = data;
      },
      (error) => {
        console.error('Error fetching quotes:', error);
      }
    );
  }
  
}
