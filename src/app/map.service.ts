import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import {
  SPAIN_MAP_BOUNDS,
  MAINLAND_SPAIN_BOUNDS,
  MAP_INITIAL_CENTER,
  MAP_INITIAL_ZOOM,
  MAP_MIN_ZOOM,
  MAP_MAX_ZOOM,
  MAP_MAX_BOUNDS_VISCOSITY,
  BASE_LAYERS,
} from './map.config';

import markers from '../scripts/poblacion_municipios_filtrado.json';
import { Marker } from './markers.interface';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  /**
   * Initializes the map if it doesn't exist, or reattaches it to the given container if it does.
   * Returns the map instance.
   */
  initMap(mapContainer: HTMLElement): L.Map | undefined {
    if (!this._map) {
      console.log('Por aqui');

      this._map = this.createMap(mapContainer);
    } else {
      // Move the map's container to the new DOM element if needed
      if (this._map.getContainer() !== mapContainer) {
        mapContainer.appendChild(this._map.getContainer());
      }
    }
    return this._map;
  }
  /**
   * Leaflet map instance. If you need to react to map creation asynchronously or support map recreation,
   * consider exposing this as an Observable instead of a simple getter.
   */
  get map(): L.Map {
    if (this._map === undefined)
      throw new Error('Map not initialized. Call initMap first.');
    return this._map!;
  }

  private _map?: L.Map;

  private markers: Marker[] = markers;

  private createMap(mapContainer: HTMLElement): L.Map {
    const map = L.map(mapContainer, {
      center: MAP_INITIAL_CENTER,
      zoom: MAP_INITIAL_ZOOM,
      zoomControl: true,
      attributionControl: true,
      maxBounds: SPAIN_MAP_BOUNDS,
      maxBoundsViscosity: MAP_MAX_BOUNDS_VISCOSITY,
      minZoom: MAP_MIN_ZOOM,
      maxZoom: MAP_MAX_ZOOM,
    });
    // Add the first base layer to the map by default. This is required to ensure the map is visible
    if (BASE_LAYERS.length > 0) {
      BASE_LAYERS[0].layer.addTo(map);
    }
    // Build the baseLayers object for the control
    const baseLayersObj: Record<string, L.TileLayer> = {};
    BASE_LAYERS.forEach(({ label, layer }) => {
      baseLayersObj[label] = layer;
    });
    L.control.layers(baseLayersObj).addTo(map);
    map.fitBounds(MAINLAND_SPAIN_BOUNDS);
    this.addMarkers(map);
    return map;
  }

  addLayer(layer: L.Layer): void {
    this._map?.addLayer(layer);
  }

  removeLayer(layer: L.Layer): void {
    this._map?.removeLayer(layer);
  }

  addControl(control: L.Control): void {
    this._map?.addControl(control);
  }

  removeControl(control: L.Control): void {
    this._map?.removeControl(control);
  }

  fitBounds(bounds: L.LatLngBoundsExpression): void {
    this._map?.fitBounds(bounds);
  }

  private addMarkers(map: L.Map) {
    if (map) {
      this.markers.forEach((marker) => {
        const leafletMarker = L.marker([marker.lat, marker.lng]).addTo(map);
        leafletMarker.bindPopup(`${marker.Nombre} (${marker.CP})`);
      });
    }
  }
}
