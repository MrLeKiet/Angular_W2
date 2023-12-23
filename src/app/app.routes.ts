import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductComponent
    },

    {
        path: 'product/:id',
        component: ProductDetailComponent
    }
];
