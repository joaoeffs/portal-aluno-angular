import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { Injectable } from "@angular/core";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  )
  {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.obterToken();

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }


}
