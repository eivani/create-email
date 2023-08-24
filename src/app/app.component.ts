import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buildEmail';
  signedin$!: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
  }

}
