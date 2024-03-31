import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('req intercepted', req)
  const userId = localStorage.getItem('user_id');
  req = req.clone({
    setHeaders: {
      user_id: userId??''
    }
  })
  return next(req);
};
