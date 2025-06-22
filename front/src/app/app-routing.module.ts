import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/unauth.guard';

const routes: Routes = [
    { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule), canActivate: [UnAuthGuard]},
    { path: 'shop', loadChildren: () => import('./altenShop/altenShop.module').then(m => m.AltenShopModule), canActivate: [AuthGuard]},
    { path: '**', redirectTo: '404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
