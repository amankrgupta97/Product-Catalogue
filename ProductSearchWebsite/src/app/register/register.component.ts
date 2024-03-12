import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MustMatch } from '../custom-validators/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]+$'),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]+$'),
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
    ),
  ]);
  constructor(private formbuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group(
      {
        email: this.emailControl,
        firstName: this.firstNameControl,
        lastName: this.lastNameControl,
        password: this.passwordControl,
        confirmPassword: ['', Validators.required],
      },
      {
        validators: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  registerUser() {
    if (!this.registerForm.invalid) {
      this.http
        .post<any>(
          'http://localhost:8081/api/v1/register',
          this.registerForm.value
        )
        .subscribe({
          next: (res) => {
            alert('Registerd Successfully!!');
            this.registerForm.reset();
          },
          error: () => {
            alert('Email Id Already Exist!!');
          },
        });
    } else {
      alert('Enter valid Details');
    }
  }
}
