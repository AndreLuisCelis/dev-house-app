import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from './service/session.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ SessionService]
})
export class SessionModule { }
