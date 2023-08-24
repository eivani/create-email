import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  isCreateEmail = new BehaviorSubject(false)

  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get<any>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string) {
    return this.http.get(`${this.rootUrl}/emails/${id}`)
  }

  sendEmail(email: any) {
    return this.http.post(`${this.rootUrl}/emails`, email).pipe(
      tap(_=>{
        this.isCreateEmail.next(true)
      })
    );
  }
}
