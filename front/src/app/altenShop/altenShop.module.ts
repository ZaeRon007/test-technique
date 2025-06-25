import { AltenShopRoutingModule } from "./altenShop-routing.module";
import { NgModule } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CoreModule } from "../core/core.module";
import { ContainerComponent } from './components/container/container.component';
import { ContactComponent } from './components/contact/contact.component';
import { BasketComponent } from './components/basket/basket.component';


@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent,
        ContainerComponent,
        ContactComponent,
        BasketComponent,
  ],
    imports: [
        AltenShopRoutingModule,
        CoreModule,
    ],
    providers: [
    ],
    exports: [
    ]
})
export class AltenShopModule {
}