import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { SessionService } from './session.service';
import { inject } from '@angular/core';




export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionService = inject(SessionService)
  const userId = localStorage.getItem('user_id');
  req = req.clone({
    setHeaders: {
      user_id: userId??''
    }
  })
  return next(req).pipe(
    catchError(err => {
      if(err.status === 401){
        sessionService.logout();
      }
      throw 'error in source. Details: ' + err;
    })
  );
};
