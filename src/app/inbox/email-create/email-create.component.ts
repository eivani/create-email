import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  @ViewChild('content') closeModal!: ElementRef;

  constructor(
    private modalService: NgbModal,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content);
  }

  onSubmit(e: any) {
    this.emailService.sendEmail(e.value).subscribe();
    this.modalService.dismissAll();
  }
}
