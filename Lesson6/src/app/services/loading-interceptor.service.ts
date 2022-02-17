import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingIndicatorService } from './loading-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  constructor(private loadingIndicator: LoadingIndicatorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingIndicator.isLoading = true;
    return next.handle(req)
      .pipe(finalize(() => {
        this.loadingIndicator.isLoading = false;
      }));
  }

}
