import { Component, signal } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductApiService } from '../../services/product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = signal<ProductModel[]>([]);
  isLoading = signal(true);

  //constructor for fetching all the products
  constructor(private service: ProductApiService, private router: Router) {
    console.log('Products Component Loaded');
    this.service.getProduct().subscribe({
      next: (response) => {
        this.products.set(response.products);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.log(error);
        this.isLoading.set(false);
      }
    })
  }

  //method for going to the next product details page
  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
