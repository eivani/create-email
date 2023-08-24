import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Observable } from 'rxjs';
import { email } from '../email-index/email-index.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
emails$!:Observable<any>;

  constructor (private emailService:EmailService) { }

  ngOnInit(): void {
    this.emailService.isCreateEmail.subscribe(item=>{console.log(item);


    })
  this.emails$ = this.emailService.getEmails();
  }

}
