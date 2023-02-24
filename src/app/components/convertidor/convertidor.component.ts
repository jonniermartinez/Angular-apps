import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['EUR', 'USD', 'LIBRA'];

  convertir() {
    switch (this.tengo) {
      case 'USD':
        this.quiero === 'EUR'
          ? (this.total = this.cantidad * 0.84)
          : this.quiero === 'LIBRA'
          ? (this.total = this.cantidad * 0.74)
          : (this.total = this.cantidad);
        break;
      case 'EUR':
        this.quiero === 'USD'
          ? (this.total = this.cantidad * 1.2)
          : this.quiero === 'LIBRA'
          ? (this.total = this.cantidad * 0.9)
          : (this.total = this.cantidad);
        break;
      case 'LIBRA':
        this.quiero === 'USD'
          ? (this.total = this.cantidad * 1.33)
          : this.quiero === 'EUR'
          ? (this.total = this.cantidad * 1.11)
          : (this.total = this.cantidad);
        break;
      default:
        break;
    }
  }
}
