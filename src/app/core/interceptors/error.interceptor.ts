import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP Error caught by Interceptor:', error);
        // Here you could add more sophisticated error handling, like:
        // - Sending logs to a remote server
        // - Transforming the error into a user-friendly message
        // - Showing a global notification (toast)
        return throwError(() => error);
      })
    );
  }
}
