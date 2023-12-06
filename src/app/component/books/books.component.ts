import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChange,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    HeaderComponent,
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

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChange) {
    this.dataSource = this.data;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    if (filterValue === '') {
      this.data = this.dataSource;
    } else {
      this.data = this.data.filter(
        (el: { id: any }) => el.id === filterValue.trim()
      );
    }
  }
}
