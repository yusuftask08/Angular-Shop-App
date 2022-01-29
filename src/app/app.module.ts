import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { from } from 'rxjs';
import {HttpClientModule} from "@angular/common/http";
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddReactiveForm2Component } from './product/product-add-reactive-form2/product-add-reactive-form2.component';
import { LoginComponent } from './login/login.component'
import { AlertifyService } from './services/alertify.service';
import { AccountService } from './account.service';
import { LoginGuard } from './login/login.guard';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    NavComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddReactiveForm2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [AlertifyService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
