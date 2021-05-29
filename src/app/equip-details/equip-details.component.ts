import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { equipment } from '../equipment';

@Component({
  selector: 'app-equip-details',
  templateUrl: './equip-details.component.html',
  styleUrls: ['./equip-details.component.css']
})
export class EquipDetailsComponent implements OnInit {
  equipamento;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(equipment) {
    this.cartService.addToCart(equipment);
    window.alert('O equipamento foi adicionado ao carrinho!');
  }

  ngOnInit() {
    //Pegando o id do produto da rota atual
    const routeParams = this.route.snapshot.paramMap;
    const equipmentIdFromRoute = Number(routeParams.get('equipmentId'));

    //Achando o produto que corresponde com o id fornecido na rota
    this.equipamento = equipment.find(
      equipamento => equipamento.id === equipmentIdFromRoute
    );
  }
}
