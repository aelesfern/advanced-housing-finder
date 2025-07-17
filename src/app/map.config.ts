// Map configuration values for Spain
import * as L from 'leaflet';

export const SPAIN_MAP_BOUNDS: L.LatLngBoundsExpression = [
  [27.0, -18.5], // Southwest (Canary Islands, SW Spain)
  [44.5, 5.0], // Northeast (Pyrenees, NE Spain, with extra space)
];

export const MAINLAND_SPAIN_BOUNDS: L.LatLngBoundsExpression = [
  [35.9, -9.5], // Southwest (Andalusia)
  [43.9, 3.3], // Northeast (Catalonia, Basque Country)
];

export const MAP_INITIAL_CENTER: L.LatLngExpression = [40.4637, -3.7492];
export const MAP_INITIAL_ZOOM = 7;
export const MAP_MIN_ZOOM = 7;
export const MAP_MAX_ZOOM = 10;
export const MAP_MAX_BOUNDS_VISCOSITY = 1.0;

/**
 * Base map layers configuration. Each entry contains a label and a Leaflet tile layer instance.
 */
export const BASE_LAYERS: Array<{ label: string; layer: L.TileLayer }> = [
  {
    label: 'Mapa estándar (OpenStreetMap)',
    layer: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: MAP_MAX_ZOOM,
      minZoom: MAP_MIN_ZOOM,
      attribution: '© OpenStreetMap contributors',
    }),
  },
  {
    label: 'Mapa oscuro (CartoDB Dark Matter)',
    layer: L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      {
        maxZoom: MAP_MAX_ZOOM,
        minZoom: MAP_MIN_ZOOM,
        attribution: '© CartoDB',
      },
    ),
  },
  {
    label: 'Satélite (Esri World Imagery)',
    layer: L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: MAP_MAX_ZOOM,
        minZoom: MAP_MIN_ZOOM,
        attribution: 'Tiles © Esri',
      },
    ),
  },
  {
    label: 'Mapa claro (CartoDB Positron)',
    layer: L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        maxZoom: MAP_MAX_ZOOM,
        minZoom: MAP_MIN_ZOOM,
        attribution: '© CartoDB',
      },
    ),
  },
];
