import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWorkProcessComponent } from './main-work-process.component';

describe('MainWorkProcessComponent', () => {
  let component: MainWorkProcessComponent;
  let fixture: ComponentFixture<MainWorkProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWorkProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWorkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
