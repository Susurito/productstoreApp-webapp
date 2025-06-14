import { Component } from '@angular/core';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.scss']
})
export class ProductsScreenComponent {
  productos = [
    { id: 1, nombre: 'Laptop Lenovo', precio: 18999},
    { id: 2, nombre: 'Smartphone Samsung', precio: 9999},
    { id: 3, nombre: 'Monitor LG 24"', precio: 3999},
    { id: 4, nombre: 'Teclado Mecánico Redragon', precio: 1299},
    { id: 5, nombre: 'Mouse Inalámbrico Logitech', precio: 799},
  ]
}
