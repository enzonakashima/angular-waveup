import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    number: '',
    expiration: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  delete(event) {
    this.cartService.remove(event);
  }

  onSubmit(): void {
    //processar dados do checkout aqui
    this.items = this.cartService.clearCart();
    console.warn('Você foi cadastrado no evento!', this.checkoutForm.value);
    window.alert(
      'Você foi cadastrado no evento!' //+ JSON.stringify(this.checkoutForm.value)
    );
    this.checkoutForm.reset;
  }

  ngOnInit() {}
}
