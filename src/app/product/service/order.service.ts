import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductVariant } from '../domain';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {

  }
  getProductVariantsByProductId(productId: string) {
    return this.http.get<ProductVariant[]>(
      'api/productVariants',
      {
        params: {
          _expand: 'product',
          _embed: 'productVariantImages',
          productId
        }
      }
    );
  }
}
