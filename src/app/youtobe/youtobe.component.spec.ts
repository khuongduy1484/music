import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutobeComponent } from './youtobe.component';

describe('YoutobeComponent', () => {
  let component: YoutobeComponent;
  let fixture: ComponentFixture<YoutobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
