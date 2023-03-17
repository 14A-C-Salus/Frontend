import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/Auth/app.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { HomeComponent } from './components/Auth/home/home.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

import { ResetPasswordComponent } from './components/Auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/Auth/forgot-password/forgot-password.component';
import { CreateProfileComponent } from './components/UserProfile/create-profile/create-profile.component';
import { ModifyProfileComponent } from './components/UserProfile/modify-profile/modify-profile.component';
import { SetProfilePictureComponent } from './components/UserProfile/set-profile-picture/set-profile-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    CreateProfileComponent,
    ModifyProfileComponent,
    SetProfilePictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
