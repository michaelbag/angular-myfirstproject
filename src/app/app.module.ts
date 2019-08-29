import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RedmineService } from './redmine/redmine.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConfigurationListComponent } from './configuration-list/configuration-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LinksComponent } from './links/links.component';
import { EmployeesService } from './employees.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,

    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: EmpListComponent },
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/:productId', component: ProductDetailsComponent },
      { path: 'links', component: LinksComponent },
      { path: 'emp', component: EmpListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ConfigurationListComponent,
    EmpListComponent,
    AppNavComponent,
    LinksComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent
  ],
  
  bootstrap: [ AppComponent ],
  providers: [RedmineService, EmployeesService, AuthService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/