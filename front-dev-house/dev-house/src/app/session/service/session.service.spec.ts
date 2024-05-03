import { TestBed, waitForAsync } from '@angular/core/testing';

import { SessionService } from './session.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../../types/user';
import {  of } from 'rxjs';

describe('SessionService', () => {
  let service: SessionService;
  const user: User = {
    _id: '123',
    email: 'email@teste.com'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
   
    service = TestBed.inject(SessionService);
    spyOn(service, 'login').and.returnValue(of(user));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login', waitForAsync(() => {
     service.login(user).subscribe( userLogged => {
      expect(userLogged).toEqual(user)
     })  
  }));

  it('setUser', () => {
    let userSetted = service.setUser(user);
    expect(userSetted).toEqual(user);
  });
});
