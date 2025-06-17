import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthComponent } from "./components/auth/auth.component";

const routes: Routes = [
    { path: 'auth', component: AuthComponent},
    { path: '404', component: NotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule{

}