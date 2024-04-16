import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs';
import { SessionService } from './session.service';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';




export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionService = inject(SessionService)
  const userId = localStorage.getItem('user_id');
  const spinner = inject(NgxSpinnerService)
  req = req.clone({
    setHeaders: {
      user_id: userId??''
    }
  })
  spinner.show();
  return next(req).pipe(
    catchError(err => {
      if(err.status === 401){
        sessionService.logout();
      }
      throw 'error in source. Details: ' + err;
    }),
    finalize(() => spinner.hide())
  );
};
