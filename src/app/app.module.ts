import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app.routing';
import { AuthenticathedInterceptor } from './interceptors/auth/authenticathed.interceptor';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: AuthenticathedInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
