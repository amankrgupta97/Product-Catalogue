import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RegisterComponent } from '../register/register.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  filterTerm!: string;
  foundProducts: any;
  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.foundProducts = this.api.products;
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

  openDetails(detail: any) {
    this.dialog.open(ProductDetailComponent, {
      width: '200%',
      data: detail,
    });
  }

  logout() {
    sessionStorage.clear();
    this.route.navigate(['']);
    alert('logged out successfully !!');
  }
}
