import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersTrendComponent } from './workers-trend.component';

describe('WorkersTrendComponent', () => {
  let component: WorkersTrendComponent;
  let fixture: ComponentFixture<WorkersTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkersTrendComponent]
    });
    fixture = TestBed.createComponent(WorkersTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
