import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BooksService } from '../../service/books.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private books: BooksService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.books.getAllBooks().subscribe((res) => {
      console.log(res);
    });
  }
}
