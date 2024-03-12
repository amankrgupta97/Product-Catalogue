import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }
  loginUser() {
    if (!this.loginForm.invalid) {
      this.http
        .post<any>('http://localhost:8081/api/v1/login', this.loginForm.value)
        .subscribe({
          next: (res) => {
            const user = res;
            sessionStorage.setItem('name', user.firstName);
            alert('hello ' + sessionStorage.getItem('name'));
            this.loginForm.reset();
          },
          error: () => {
            alert('Invalid User');
          },
        });
    } else {
      alert('please enter valid credentials!!');
    }
  }
}
