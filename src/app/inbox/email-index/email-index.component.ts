import { Component, Input, OnInit } from '@angular/core';

export interface email {
from:string,
id:string,
subject:string
}

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  @Input() emails: Array<email> = [];

  constructor() {}

  ngOnInit(): void {}
}
