import { EventEmitter } from '@angular/core';

export class ButtonEvent {
  static btnEmitter = new EventEmitter<boolean>();
}
