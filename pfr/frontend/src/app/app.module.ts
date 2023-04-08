import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AddDirectionRegionalComponent } from './DirectionRegional/add-direction-regional/add-direction-regional.component';
import { GetDirectionRegionalComponent } from './DirectionRegional/get-direction-regional/get-direction-regional.component';
import { AuthInterceptor } from './auth.interceptor';
import { DirectionRegionalModalComponent } from './modal/direction-regional-modal/direction-regional-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    AddDirectionRegionalComponent,
    GetDirectionRegionalComponent,
    DirectionRegionalModalComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
