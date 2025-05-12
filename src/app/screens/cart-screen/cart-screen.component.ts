import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss']
})
export class CartScreenComponent {
  productosCarrito = [
    {
      titulo: 'Audifonos Bluetooh',
      imagen: '/assets/images/audifonos.jpg'
    },
    {
      titulo: 'Smartwatch Xiaomi',
      imagen: 'assets/images/smartwatch.jpg'
    },
    {
      titulo: 'Camara Web HD',
      imagen: 'assets/images/camara.jpg'
    },
    {
      titulo: 'Disco Duro Externo',
      imagen: 'assets/images/disco-duro.jpg'
    },
    {
      titulo: 'Bocina Portátil',
      imagen: 'assets/images/bocina.jpg'
    },
  ]
}
