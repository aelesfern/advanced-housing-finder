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

    // Max bounds include islands for panning, but fitBounds will focus on mainland
    const spainBounds: L.LatLngBoundsExpression = [
      [27.0, -18.5], // Southwest (Canary Islands, SW Spain)
      [44.5, 5.0], // Northeast (Pyrenees, NE Spain, with extra space)
    ];

    // Mainland Spain bounds for initial zoom
    const mainlandBounds: L.LatLngBoundsExpression = [
      [35.9, -9.5], // Southwest (Andalusia)
      [43.9, 3.3], // Northeast (Catalonia, Basque Country)
    ];

    this.map = L.map(mapContainer, {
      center: [40.4637, -3.7492],
      zoom: 7,
      zoomControl: true,
      attributionControl: true,
      maxBounds: spainBounds,
      maxBoundsViscosity: 1.0,
      minZoom: 7,
      maxZoom: 10,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      minZoom: 7,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // Fit to mainland bounds on load (ignores islands for zoom)
    this.map.fitBounds(mainlandBounds);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
