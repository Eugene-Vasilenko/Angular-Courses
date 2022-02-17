import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(limit: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products?limit=' + limit);
  }

  addProduct(newProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>('https://fakestoreapi.com/products', newProduct);
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.httpClient.put<Product>('https://fakestoreapi.com/products/' + updatedProduct.id, updatedProduct);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.httpClient.delete<Product>('https://fakestoreapi.com/products/' + product.id);
  }

}
