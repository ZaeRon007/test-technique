import { CommonModule, registerLocaleData } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import * as fr from '@angular/common/locales/fr'
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';



@NgModule({
    declarations: [
        LandingPageComponent,
        NotFoundComponent,
        AuthComponent,
        RegisterComponent,
        LogInComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreRoutingModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatSidenavModule,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'fr-FR' },
    ],
    exports: [
        LandingPageComponent,
        NotFoundComponent,
        AuthComponent,
        RegisterComponent,
        LogInComponent,
    ]
})
export class CoreModule {
    constructor(){
        registerLocaleData(fr.default);
    }
}