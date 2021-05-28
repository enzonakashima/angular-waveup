import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  addToCart(event) {
    this.items.push(event);
  }

  getItems() {
    return this.items;
  }

  remove(event) {
    this.items.splice(event);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
