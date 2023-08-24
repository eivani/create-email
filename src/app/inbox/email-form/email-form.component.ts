import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
  @Output() emailSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      to: new FormControl(''),
      from: new FormControl(''),
      subject: new FormControl(''),
      text: new FormControl(''),
    });
  }

  onSubmit() {
    this.emailSubmit.emit(this.emailForm)
  }
}
