import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { UniqueUsernameService } from '../unique-username.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private authService: AuthService, private uniqueUsernameService:UniqueUsernameService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = new FormGroup(
      {
        username: new FormControl('',
        [Validators.required],
        [this.uniqueUsernameService.validate]),
        password: new FormControl(''),
        passwordConfirmation: new FormControl(''),
      },
      [Validators.required, this.ValidatePass]
    );
  }

  onSubmit() {
    this.authService.signup(this.authForm.value).subscribe((item) => {
      console.log(item);
    });
  }

  ValidatePass(control: any): any {
    if (
      control['controls'].password.value !==
      control['controls'].passwordConfirmation.value
    ) {
      return { passInvalid: true };
    }
    return null;
  }
}
