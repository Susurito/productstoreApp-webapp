import { Component } from '@angular/core';

@Component({
  selector: 'app-products-details-screen',
  templateUrl: './products-details-screen.component.html',
  styleUrls: ['./products-details-screen.component.scss']
})
export class ProductsDetailsScreenComponent {
  producto= {
    id: 2,
    nombre: 'Smartphone Samsung',
    descripcion: 'Un smartphone con pantalla AMOLED, con camara triple y bateria de larga duración.',
    precio: 9999};

  agregarAlCarrito() {
    alert('Producto agregado al carrito (esto es solo una simulacion).');
  }
}
