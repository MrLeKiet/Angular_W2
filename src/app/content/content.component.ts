import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  products = [
    { id: 1, name: 'product 1' },
    { id: 2, name: 'product 2' },
    { id: 3, name: 'product 3' },
    { id: 4, name: 'product 4' },
    { id: 5, name: 'product 5' },
  ];


  handleClearAll() {
    this.products = [];
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((content) => content.id !== id);
  }
}
