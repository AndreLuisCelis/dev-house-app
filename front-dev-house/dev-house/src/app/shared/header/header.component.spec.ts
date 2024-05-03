import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing'

import { HeaderComponent } from './header.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent,  HttpClientTestingModule],
      providers: [ provideHttpClientTesting(), provideAnimations()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logout', async () => {
    const deslogou = await component.logout();
    expect(deslogou).toBeTruthy();
  });

  // it('Should be async', function(done) {
  //   someAsyncFunction().then(function(result) {
  //     expect(result).toBe(true);
  //     done();
  //   });
  // });
});


