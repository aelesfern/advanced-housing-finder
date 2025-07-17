import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpainMapComponent } from './spain-map.component';

// Mock Leaflet to avoid DOM dependency in unit tests
import * as L from 'leaflet';

describe('SpainMapComponent', () => {
  let component: SpainMapComponent;
  let fixture: ComponentFixture<SpainMapComponent>;
  let mapSpy: jasmine.Spy;
  let tileLayerSpy: jasmine.Spy;
  let controlLayersSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpainMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    // Spy on L.map, L.tileLayer, and L.control.layers
    mapSpy = spyOn(L, 'map').and.callFake(
      () =>
        ({
          remove: jasmine.createSpy('remove'),
          fitBounds: jasmine.createSpy('fitBounds'),
          addControl: jasmine.createSpy('addControl'),
        }) as any,
    );
    tileLayerSpy = spyOn(L, 'tileLayer').and.callFake(() => {
      // Create a function object to satisfy the type signature
      const fakeLayer: any = function () {};
      fakeLayer.addTo = jasmine.createSpy('addTo');
      return fakeLayer;
    });
    // Assign a dummy static wms method to the spy function to satisfy the type checker
    (L.tileLayer as any).wms = jasmine
      .createSpy('wms')
      .and.returnValue({ addTo: jasmine.createSpy('addTo') });
    controlLayersSpy = spyOn(L.control, 'layers').and.callFake(
      () =>
        ({
          addTo: jasmine.createSpy('addTo'),
        }) as any,
    );

    fixture = TestBed.createComponent(SpainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
