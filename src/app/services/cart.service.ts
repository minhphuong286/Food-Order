import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }
  // add to Cart 
  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) return;
    this.cart.items.push(new CartItem(food));
    this.setSertToLocalStorage();
  }
  // remove cart item
  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setSertToLocalStorage();
  }
  // change Quantity
  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setSertToLocalStorage();
  }
  // clear Cart
  clearCart() {
    this.cart = new Cart();
    this.setSertToLocalStorage();
  }
  // get Cart Observable mean check Observable data
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  // now set Localstorage data
  private setSertToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  // when ever set local storage data then also get data
  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
