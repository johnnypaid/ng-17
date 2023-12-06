import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './component/button/button.component';
import { ButtonEvent } from './Emitter/emitter';
import { slideInAnimation } from './animation/animations';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    DashboardComponent,
    MatButtonModule,
    ButtonComponent,
    RouterModule,
    HeaderComponent,
  ],
  providers: [],
  animations: [slideInAnimation],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  showBtn = true;
  showBgImg = true;

  constructor(
    private cd: ChangeDetectorRef,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit(): void {
    this.showBgImg = true;
    this.cd.detectChanges();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  ngAfterViewInit(): void {
    ButtonEvent.btnEmitter.subscribe((value) => {
      this.showBgImg = false;
      this.showBtn = value;
      this.cd.detectChanges();
    });
  }
}
