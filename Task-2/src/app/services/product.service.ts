import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseUrl } from "../../environment";
import { ProductResponseModel } from "../models/product.response.model";
import { ProductModel } from "../models/product.model";
import { catchError, of, tap } from "rxjs";

//for getting all the product details
@Injectable({
    providedIn: 'root'
})
export class ProductApiService {
    constructor(private http: HttpClient) { }

    //method for getting all the product details
    public getProduct() {
        let url = baseUrl + '/products'
        return this.http.get<ProductResponseModel>(url).pipe(
            tap(response => console.log('Total Products : ', response.total)),
            catchError(error => {
                console.log('Error happend while fetching ', error)
                return of({ products: [], total: 0, skip: 0, limit: 0 })
            })
        );
    }

    //method for getting a single product
    public getProductById(productId: number) {
        let url = baseUrl + '/products/' + productId;
        return this.http.get<ProductModel>(url).pipe(
            tap(response => console.log('product fetched : ', response.id))
        );
    }
}