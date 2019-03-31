import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private formSubmitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  loginFormSubmit(): void {
    this.formSubmitted = true;
    console.table(this.loginForm.value);
    console.log(this.loginForm.valid);
  }

  get formErrorMessage(): string {
    return this.formSubmitted && !this.loginForm.valid
      ? 'Please enter a valid email address and password'
      : '';
  }
}
