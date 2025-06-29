import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-book-form',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
  standalone: true
})
export class BookFormComponent {
  model: any = {};
  isEdit = false;

  constructor(private api: Api, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (bookId) {
      this.isEdit = true;
      this.api.getBookById(bookId).subscribe(data => {
        this.model = data;
      });
    }
  }

  save() {
    if (this.isEdit) {
      this.api.updateBook(this.model.id, this.model).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.api.addBook(this.model).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
