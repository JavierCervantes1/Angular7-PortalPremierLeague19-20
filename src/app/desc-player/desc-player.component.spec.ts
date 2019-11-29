import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescPlayerComponent } from './desc-player.component';

describe('DescPlayerComponent', () => {
  let component: DescPlayerComponent;
  let fixture: ComponentFixture<DescPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
