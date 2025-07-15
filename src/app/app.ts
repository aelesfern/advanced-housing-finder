import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '',
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
      }
    `,
  ],
})
export class App {}
