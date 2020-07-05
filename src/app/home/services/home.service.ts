import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopMenu, Channel, ImageSlider } from './../../shared/components';
import { Ad, Product } from './../../shared/domain/index';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {

  }

  getTabs() {
    return this.http.get<TopMenu[]>('/api/tabs');
  }
  getChannel() {
    return this.http.get<Channel[]>('/api/channels');
  }
  getImageSliders() {
    return this.http.get<ImageSlider[]>('/api/banners');
  }
  getAdByTab(tab: string) {
    return this.http.get<Ad[]>('api/ads', {
      params: { categories_link: tab }
    })
  }
  getProductsByTab(tab: string) {
    return this.http.get<Product[]>('api/products', {
      params: { categories_link: tab }
    })
  }
}
