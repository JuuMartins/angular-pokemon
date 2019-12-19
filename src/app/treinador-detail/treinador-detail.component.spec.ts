import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorDetailComponent } from './treinador-detail.component';

describe('TreinadorDetailComponent', () => {
  let component: TreinadorDetailComponent;
  let fixture: ComponentFixture<TreinadorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
