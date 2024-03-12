import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;
  searchForm!: FormGroup;
  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formbuilder.group({
      searchbox: ['', Validators.required],
    });
  }

  registerForm() {
    this.dialog.open(RegisterComponent, {
      width: '30%',
    });
  }

  loginForm() {
    this.dialog.open(LoginComponent, {
      width: '30%',
    });
  }

  isloggedIn() {
    if (sessionStorage.getItem('name') == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    sessionStorage.clear();
    alert('logged out successfully !!');
  }

  searchProduct() {
    if (this.searchForm.valid) {
      this.api.search(this.searchForm.get('searchbox')?.value).subscribe({
        next: (res) => {
          this.api.products = res;
          this.route.navigate(['result']);
        },
        error: () => {
          alert('no match found');
        },
      });
    } else {
      alert('search can not be blank');
    }
  }
}
