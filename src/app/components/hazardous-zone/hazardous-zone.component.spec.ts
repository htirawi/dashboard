import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardousZoneComponent } from './hazardous-zone.component';

describe('HazardousZoneComponent', () => {
  let component: HazardousZoneComponent;
  let fixture: ComponentFixture<HazardousZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazardousZoneComponent]
    });
    fixture = TestBed.createComponent(HazardousZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
