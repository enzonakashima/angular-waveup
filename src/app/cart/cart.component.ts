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

  //this.items.indexOf('price')

  checkPrice(){
    for(var item of this.items){
      if (item.price > 0){
        return true;
      }
    }
  }

  onSubmit(): void {
    //processar dados do checkout aqui
    this.items = this.cartService.clearCart();
    console.warn('Você foi cadastrado no evento!', this.checkoutForm.value);
    window.alert(
      'Compra finalizada com sucesso!' //+ JSON.stringify(this.checkoutForm.value)
    );
    this.checkoutForm.reset;
  }

  ngOnInit() {}
}
