import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { EmailService } from '../email.service';
import { email } from '../email-index/email-index.component';

export interface emailDetail {
  from: string;
  html: string;
  id: string;
  subject: string;
  text: string;
  to: string;
}

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email!: emailDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ email }) => {
      this.email = email;
    });
  }
}
