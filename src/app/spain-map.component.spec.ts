import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpainMapComponent } from './spain-map.component';

// Mock Leaflet to avoid DOM dependency in unit tests
import * as L from 'leaflet';

class MockMap {
  remove = jasmine.createSpy('remove');
}
class MockTileLayer {
  addTo = jasmine.createSpy('addTo');
}

// @ts-ignore
L.map = () => new MockMap();
// @ts-ignore
L.tileLayer = () => new MockTileLayer();

describe('SpainMapComponent', () => {
  let component: SpainMapComponent;
  let fixture: ComponentFixture<SpainMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpainMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
