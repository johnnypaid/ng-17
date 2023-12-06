import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() name!: string;
  @Input() color: string = 'accent';
  @Output() showBtnEvent = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/dashboard']);
  }
}
