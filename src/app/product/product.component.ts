import { Component, Input } from '@angular/core';
import { __values } from 'tslib';
import { ContentComponent } from '../content/content.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private productService: ProductService) {}

  products: any;

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
		this.products = this.productService.getProducts();
  }
}
