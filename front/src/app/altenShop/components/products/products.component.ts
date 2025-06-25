import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService';
import { BehaviorSubject, combineLatest, map, Observable, Subscription, tap } from 'rxjs';
import { productEntity } from '../../../core/models/productEntity';
import { userWishsEntity } from '../../../core/models/userWishsEntity';
import { userBasketEntity } from '../../../core/models/userBasketEntity';
import { UserBasketService } from '../../services/userBasketService';
import { UserWishsService } from '../../services/userWishsService';
import { userBasketAddDto } from '../../../core/models/dto/userBasketAddDto';
import { ProductWithQuantity } from '../../../core/models/ProductWithQuantity';
import { Q } from '@angular/cdk/keycodes';
import { GlobalService } from '../../services/globalService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  private sub1: Subscription = new Subscription();
  private sub2: Subscription = new Subscription();
  private sub3: Subscription = new Subscription();
  productsTab$ = new BehaviorSubject<productEntity[]>([]);
  public productsWithQuantities$!: Observable<ProductWithQuantity[]>;

  constructor(private globalService: GlobalService,
    private basketService: UserBasketService,
    private wishsService: UserWishsService
  ) {
  }

  ngOnInit(): void {

    // load user basket state
    this.sub1 = this.basketService.getUserBasket().subscribe();

    // load user wish list state
    this.sub2 = this.wishsService.getUserWishs().subscribe();

    this.productsWithQuantities$ = this.globalService.Init();
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }

  isInWishList(product_id: number): boolean {
    return this.wishsService.whishs$.value.some(wish => wish.productId === product_id);
  }

  addToWishs(id: number) {
    this.wishsService.addToWishs(id);
  }

  removeFromWishs(id: number) {
    this.wishsService.removeFromWishs(id);
  }

  addToCart(id: number, quantity: number) {
    this.basketService.addToCart(id, quantity);
  }

  increaseAmount(id: number, quantity: number) {
    this.basketService.increaseAmount(id, quantity);
  }

  decreaseAmount(id: number, quantity: number) {
    this.basketService.decreaseAmount(id, quantity);
  }
}
