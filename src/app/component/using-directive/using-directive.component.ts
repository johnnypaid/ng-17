import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-using-directive',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, MatButtonModule],
  templateUrl: './using-directive.component.html',
  styleUrl: './using-directive.component.scss',
})
export class UsingDirectiveComponent {
  chFont = false;
  title = 'Original Text';

  changeFont() {
    this.chFont = !this.chFont;
    this.chFont
      ? (this.title = 'With Directives')
      : (this.title = 'Original Text');
  }
}
