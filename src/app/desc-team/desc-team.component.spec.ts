import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescTeamComponent } from './desc-team.component';

describe('DescTeamComponent', () => {
  let component: DescTeamComponent;
  let fixture: ComponentFixture<DescTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
