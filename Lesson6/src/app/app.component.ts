import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { LoadingIndicatorService } from './services/loading-indicator.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService, public loadingIndicator: LoadingIndicatorService) {

  }

  ngOnInit(): void {
    this.productsService.getProducts(5)
      .subscribe((data: Product[]) => {
        this.products = data;
      })
  }


  addProduct() {
    const newProduct = <Product>{
      "title": "Dummy product",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    };

    this.productsService.addProduct(newProduct)
      .subscribe((data: Product) => {
        this.products.push(data);
      })
  }

  updateProductPrice(product: Product) {

    const updatedProduct = { ...product, price: product.price / 2 };

    this.productsService.updateProduct(updatedProduct)
      .subscribe((data: Product) => {
        const productIndex = this.products.indexOf(product);
        this.products[productIndex] = data;
      });

  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product)
      .subscribe((data: Product) => {
        const productIndex = this.products.indexOf(product);
        this.products.splice(productIndex, 1);
      });
  }

}
