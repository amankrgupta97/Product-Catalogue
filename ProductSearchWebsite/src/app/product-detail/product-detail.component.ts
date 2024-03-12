import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  availabiltyForm!: FormGroup;
  product: any;
  daysToReach: any;
  message = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private productData: any,
    private formbuilder: FormBuilder,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.product = this.productData;
    this.availabiltyForm = this.formbuilder.group({
      pincode: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
      ]),
    });
  }
  checkAvailability() {
    if (this.availabiltyForm.valid) {
      this.api
        .getDaystoReach(this.availabiltyForm.get('pincode')?.value)
        .subscribe({
          next: (res) => {
            this.message = true;
            this.daysToReach = res;
          },
          error: () => {
            this.message = false;
            alert('Delivery Unavailable');
          },
        });
    } else {
      this.message = false;
      alert('enter valid pincode');
    }
  }
}
