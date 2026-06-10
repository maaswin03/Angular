import { Component, signal } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductApiService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  //varaibale for storing the product details
  product = signal<ProductModel>(new ProductModel());

  //constructor for fetching a particular product
  constructor(private service: ProductApiService, private route: ActivatedRoute, private router: Router) {
    var id = Number(this.route.snapshot.paramMap.get('id')); //getting id from the url
    this.service.getProductById(id).subscribe({
      next: (response) => {
        this.product.set(response);
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
