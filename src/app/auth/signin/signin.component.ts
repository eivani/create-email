import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.oninitForm()
  }

  oninitForm() {
    this.authForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', [])
    });
  }

  onSubmit(){
    if (this.authForm.invalid) {
      return;
    }
    this.authService.signin(this.authForm.value).subscribe({
      next:()=>{
        this.router.navigateByUrl('/inbox');
      },
      error:()=>{

      }
    })
  }
}
