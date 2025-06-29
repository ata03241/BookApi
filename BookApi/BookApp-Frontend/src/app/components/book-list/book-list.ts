import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-book-list',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  standalone: true
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private api: Api) { }

  //ngonInit to load books when the component is initialized
  ngOnInit() {
    this.api.getBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        alert('Failed to load books. Please try again later.');
      }
    );
  }

  deleteBook(id: number) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.api.deleteBook(id).subscribe(
        () => {
          this.books = this.books.filter(book => book.id !== id);
          alert('Book deleted successfully.');
          this.ngOnInit();
        },
        (error) => {
          alert('Failed to delete book. Please try again later.');
        }
      );
    }
  }
}
