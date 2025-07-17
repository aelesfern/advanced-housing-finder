import { Component } from '@angular/core';
import { SpainMapComponent } from './spain-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpainMapComponent],
  template: `<app-spain-map></app-spain-map>`,
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
