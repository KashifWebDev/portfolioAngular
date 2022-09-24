import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSayComponent } from './client-say.component';

describe('ClientSayComponent', () => {
  let component: ClientSayComponent;
  let fixture: ComponentFixture<ClientSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
