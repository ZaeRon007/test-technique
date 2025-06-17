import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'auth', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
    { path: '**', redirectTo: '404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
