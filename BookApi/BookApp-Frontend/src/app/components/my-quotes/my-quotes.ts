import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-quotes',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './my-quotes.html',
  styleUrl: './my-quotes.css',
  standalone: true
})
export class MyQuotesComponent {
  quotes = [
    {id: 1, text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author:"Eleanor Roosevelt"},
    {id: 2, text: "Build your own dreams, or someone else will hire you to build theirs.", author:"Farrah Gray"},
    {id: 3, text: "The only way to do great work is to love what you do.", author:"Steve Jobs"},
    {id: 4, text: "Success usually comes to those who are too busy to be looking for it.", author:"Henry David Thoreau"},
    {id: 5, text: "Don't watch the clock; do what it does. Keep going.", author:"Sam Levenson"},
  ]
}
