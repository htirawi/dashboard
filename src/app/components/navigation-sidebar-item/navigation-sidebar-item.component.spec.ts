import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidebarItemComponent } from './navigation-sidebar-item.component';

describe('NavigationSidebarItemComponent', () => {
  let component: NavigationSidebarItemComponent;
  let fixture: ComponentFixture<NavigationSidebarItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationSidebarItemComponent]
    });
    fixture = TestBed.createComponent(NavigationSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
