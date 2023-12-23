import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  constructor (
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  @Input() id: string ='';
  @Input() hasDescription = true;

  product: any = {};
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    const id = params['id'];

    this.product = this.productService.getProductById(id);
  }
}
