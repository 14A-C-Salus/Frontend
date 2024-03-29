import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/Auth/forgot-password/forgot-password.component';

import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { ResetPasswordComponent } from './components/Auth/reset-password/reset-password.component';
import { CreateProfileComponent } from './components/UserProfile/create-profile/create-profile.component';
import { ModifyProfileComponent } from './components/UserProfile/modify-profile/modify-profile.component';
import { RecipeComponent } from './components/Recipe/recipe.component';
import { AuthGuard } from './services/auth.guard';
import { AuthGuardAdmin } from './services/admin.guard';
import { AboutUsComponent } from './components/AboutUs/about-us.component';
import { AdminComponent } from './components/admin/admin.component';
import { MealsComponent } from './components/meals/meals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  {
    path: 'CreateProfile',
    component: CreateProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ModifyProfile',
    component: ModifyProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Recipe', component: RecipeComponent, canActivate: [AuthGuard] },
  { path: 'Meals', component: MealsComponent, canActivate: [AuthGuard] },
  { path: 'Admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'AboutUs', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
