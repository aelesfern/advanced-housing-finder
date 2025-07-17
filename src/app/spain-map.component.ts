import {
  Component,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  inject,
  viewChild,
} from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-spain-map',
  template: `<div class="map-container" #mapContainer></div>`,
  styles: [
    `
      .map-container {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
      }
    `,
  ],
})
export class SpainMapComponent implements AfterViewInit, OnDestroy {
  private map?: L.Map;

  mapContainerRef = viewChild.required<ElementRef<HTMLElement>>('mapContainer');

  private mapService = inject(MapService);

  ngAfterViewInit(): void {
    const mapContainer = this.mapContainerRef().nativeElement;
    this.map = this.mapService.initMap(mapContainer);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
