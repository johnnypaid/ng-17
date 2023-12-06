import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookItemComponent } from './book-item/book-item.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

const ELEMENT_DATA: any = [
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

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HeaderComponent, BookItemComponent, MatTableModule, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements AfterViewChecked {
  @Input() data = [];
  booksData = [];
  displayedColumns: string[] = ['id', 'type', 'links'];

  ngAfterViewChecked(): void {
    console.log(this.data);
  }
}
