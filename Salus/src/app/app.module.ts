import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { HomeComponent } from './components/Home/home.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

import { ResetPasswordComponent } from './components/Auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/Auth/forgot-password/forgot-password.component';
import { CreateProfileComponent } from './components/UserProfile/create-profile/create-profile.component';
import { ModifyProfileComponent } from './components/UserProfile/modify-profile/modify-profile.component';
import { RecipeComponent } from './components/Recipe/recipe.component';
import { MealsComponent } from './components/Meals/meals.component';
import { AdminComponent } from './components/Admin/admin.component';
import { AddIngredientComponent } from './components/Recipe/add-ingredient/add-ingredient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeComponent } from './components/Recipe/add-recipe/add-recipe.component';
import { AddMealsComponent } from './components/Recipe/add-meals/add-meals.component';
import { AboutUsComponent } from './components/AboutUs/about-us.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { AddDietComponent } from './components/Admin/add-diet/add-diet.component';
import { AddOilComponent } from './components/Admin/add-oil/add-oil.component';
import { AddTagComponent } from './components/Recipe/add-tag/add-tag.component';

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
    NavbarComponent,
    RecipeComponent,
    MealsComponent,
    AdminComponent,
    AddIngredientComponent,
    AddRecipeComponent,
    AddMealsComponent,
    AboutUsComponent,
    AddDietComponent,
    AddOilComponent,
    AddTagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
