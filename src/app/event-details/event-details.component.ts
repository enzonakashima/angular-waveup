import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { events } from '../events';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(event) {
    this.cartService.addToCart(event);
    window.alert('Your event has been added to the cart!');
  }

  ngOnInit() {
    //Pegando o id do produto da rota atual
    const routeParams = this.route.snapshot.paramMap;
    const eventIdFromRoute = Number(routeParams.get('eventId'));

    //Achando o produto que corresponde com o id fornecido na rota
    this.event = events.find(event => event.id === eventIdFromRoute);
  }
}
