import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../domain';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private http: HttpClient) {

  }

  getProfile() {
    return this.http.get<Profile>('api/profile');
  }
}
