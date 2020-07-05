import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopMenu, Channel, ImageSlider } from './../../shared/components';

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
}
