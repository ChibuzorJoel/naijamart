import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './shared/angular-material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SellerDashboardComponent } from './pages/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './pages/buyer/buyer-dashboard/buyer-dashboard.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ProductsComponent } from './pages/products/products.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SellerProductsComponent } from './pages/seller/seller-dashboard/seller-products/seller-products.component';
import { SellerOrdersComponent } from './pages/seller/seller-dashboard/seller-orders/seller-orders.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SellerDashboardComponent,
    BuyerDashboardComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SellerProductsComponent,
    SellerOrdersComponent,
    ProductDetailsComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
