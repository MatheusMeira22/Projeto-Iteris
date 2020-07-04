import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosPageComponent } from './servicos-page.component';

describe('ServicosPageComponent', () => {
  let component: ServicosPageComponent;
  let fixture: ComponentFixture<ServicosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
