import { Component, Input } from '@angular/core';
import { __values } from 'tslib';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = [
    { id: 1, name: 'product 1', price: 100 },
    { id: 2, name: 'product 2', price: 100 },
    { id: 3, name: 'product 3', price: 100 },
    { id: 4, name: 'product 4', price: 100 },
    { id: 5, name: 'product 5', price: 100 },
  ];

  @Input ({
    transform: (value: any) => {
      return {
        ...value,
        total: value.price
      }
    },
  }) product: any;

  @Input() item = '';

  @Input() name = '';
}
