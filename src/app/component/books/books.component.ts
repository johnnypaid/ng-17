import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookItemComponent } from './book-item/book-item.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    HeaderComponent,
    BookItemComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  @Input() data: any = [];
  dataSource: any = [];

  displayedColumns: string[] = [
    'id',
    'image',
    'type',
    'content',
    'display type',
  ];

  ngOnChanges(changes: SimpleChange) {
    this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (filterValue === '') {
      window.location.reload();
    } else {
      this.data = this.data.filter(
        (el: { id: any }) => el.id === filterValue.trim()
      );
    }
    console.log(this.data);
  }
}
