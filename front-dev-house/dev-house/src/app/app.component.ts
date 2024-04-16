import { Component, Inject, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { SessionService } from './session/service/session.service';
import { User } from './types/user';
import { environment } from '../environments/environment.development';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SessionComponent, HeaderComponent, CommonModule,NgxSpinnerModule],
  template: `
  <ngx-spinner type="ball-scale-multiple"></ngx-spinner>
  <app-header [user]="currentUserObservable$ | async"></app-header>
  <router-outlet></router-outlet>`,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  env = environment
  title = process.env["API_KEY"] || 'DEF_A';
  userId = '';
  currentUserObservable$ = this.sessionService.currentUser$;
  currentUser: User | null = null;
  constructor(
    private router: Router,
    // É PRECISO PARA IDENTIFICAR SE É O CLIENTE (BROWSER) OU SE É O SERVER
    // SERVER NÃO TEM LOCALSTORAGE
    @Inject(DOCUMENT) private document: Document,
    private sessionService: SessionService,
  ){ }

  ngOnInit(): void{
    console.log('env',this.env)
    // PARA VERIFICAR SE ESTA NO CLIENTE(BROWSER) E POSSUI LOCALSTORAGE
    const localStorage = this.document.defaultView?.localStorage;
    if(localStorage ) {
      this.userId = localStorage.getItem('user_id')?? ''
      this.sessionService.setUser(this.sessionService.getCurrentUser());
    }
    if(this.userId) {
      this.router.navigateByUrl('dashboard')
    } else {
      this.router.navigateByUrl('')
    } 


  }

  logout(): void {
    const localStorage = this.document.defaultView?.localStorage;
    if(localStorage) {
      this.sessionService.logout();
    }
  }
  ngOnDestroy(): void{
    this.logout();
  }
}
