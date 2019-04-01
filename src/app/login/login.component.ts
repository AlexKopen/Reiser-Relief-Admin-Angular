import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private authChecked = false;
  private user: User;
  private invalidLogin: boolean;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  private formSubmitted = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authenticationState.subscribe(user => {
      if (user !== null) {
        this.router.navigate(['/dashboard']).then();
      } else {
        this.authChecked = true;
        this.user = user;
      }
    });
  }

  get showComponent(): boolean {
    return this.authChecked && this.user === null;
  }

  loginFormSubmit(): void {
    this.formSubmitted = true;
    this.invalidLogin = false;

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then(value => {})
      .catch(value => {
        this.invalidLogin = true;
      });
  }

  get formErrorMessage(): string {
    return (this.formSubmitted && !this.loginForm.valid) || this.invalidLogin
      ? 'Please enter a valid email address and password'
      : '';
  }
}
