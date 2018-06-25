import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLoadingBarComponent } from './angular-loading-bar.component';

describe('AngularLoadingBarComponent', () => {
  let component: AngularLoadingBarComponent;
  let fixture: ComponentFixture<AngularLoadingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLoadingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
