import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EmailService } from './email.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable, observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<any> {
  constructor(private emailService: EmailService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigate(['/inbox/not-found']);
        return throwError(() => new Error('test'));
      })
    );
  }
}
