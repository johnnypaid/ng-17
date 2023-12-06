import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { RouterOutlet } from '@angular/router';
import { ButtonEvent } from '../../Emitter/emitter';
import { HeaderComponent } from '../header/header.component';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BooksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  dataSource: any = [];

  ELEMENT_DATA: any = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  constructor(private books: BooksService) {}

  ngOnInit() {
    ButtonEvent.btnEmitter.emit(false);
    this.loadBooks();
  }

  loadBooks() {
    this.books.getAllBooks().subscribe((res) => {
      this.dataSource = res;

      console.log(this.dataSource);
    });
  }
}
