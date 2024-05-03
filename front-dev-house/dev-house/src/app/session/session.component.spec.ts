import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionComponent } from './session.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { User } from '../types/user';

describe('SessionComponent', () => {
  let component: SessionComponent;
  let fixture: ComponentFixture<SessionComponent>;
  const user: User = {
    _id: '123',
    email: 'email@teste.com'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionComponent, HttpClientTestingModule],
      providers: [ provideHttpClientTesting(), provideAnimations()]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login', () => {
    component.user.setValue(user);
    const userLogged = component.login();
    expect(userLogged).toEqual(user);
  });
});
