import { Component, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SessionComponent],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dev-house';
  userId = '';
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ){ }

  ngOnInit(): void{
    const localStorage = this.document.defaultView?.localStorage;
    if(localStorage ) {
      this.userId = localStorage.getItem('user_id')?? ''
    }
    if(this.userId) {
      this.router.navigateByUrl('dashboard')
    } else {
      this.router.navigateByUrl('')
    } 
  }
}
