import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { SessionService } from './service/session.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../types/user';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss'
})
export class SessionComponent {
  constructor(
    private service: SessionService,
    private router: Router
  ) { }

  user = new FormControl();
  envApiUrl = process.env["API_URL"] || environment.baseUrl;

  ngOnInit() {
    this.user.setValidators([Validators.email, Validators.required]);
  }
  login(): User {
    if(this.user.value && this.user.valid){
      const user: User = {
        email: this.user.value
      }
      this.service.login(user).subscribe({
        next: user => {
          this.service.setUser(user);
          this.router.navigateByUrl('dashboard');
        }
      })
    } else {
      this.user.markAllAsTouched();
    }
    return this.user.value;
  }
}