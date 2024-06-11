import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInformationComponent } from './site-information.component';

describe('SiteInformationComponent', () => {
  let component: SiteInformationComponent;
  let fixture: ComponentFixture<SiteInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteInformationComponent]
    });
    fixture = TestBed.createComponent(SiteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
