import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

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
export class SpainMapComponent implements OnInit, OnDestroy {
  private map?: L.Map;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const mapContainer = this.el.nativeElement.querySelector('.map-container');
    this.map = L.map(mapContainer, {
      center: [40.4637, -3.7492], // Center of Spain
      zoom: 6,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
