import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService';
import { Subscription } from 'rxjs';
import { productEntity } from '../../../core/models/productEntity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  productsTab: productEntity[] = [];

  constructor(private productService: ProductService){
  }
  ngOnInit(): void {
    this.sub = this.productService.getAllProducts().subscribe((productsList: productEntity[]) => {
      this.productsTab = productsList;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
