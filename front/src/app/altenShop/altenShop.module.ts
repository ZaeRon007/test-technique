import { AltenShopRoutingModule } from "./altenShop-routing.module";
import { NgModule } from "@angular/core";
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CoreModule } from "../core/core.module";
import { ContainerComponent } from './components/container/container.component';


@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent,
        ContainerComponent,
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