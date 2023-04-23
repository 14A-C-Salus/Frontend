import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/Auth/forgot-password/forgot-password.component';

import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { ResetPasswordComponent } from './components/Auth/reset-password/reset-password.component';
import { CreateProfileComponent } from './components/UserProfile/create-profile/create-profile.component';
import { ModifyProfileComponent } from './components/UserProfile/modify-profile/modify-profile.component';
import { SetProfilePictureComponent } from './components/UserProfile/set-profile-picture/set-profile-picture.component';
import { RecipeComponent } from './components/Recipe/recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'CreateProfile', component: CreateProfileComponent },
  { path: 'ModifyProfile', component: ModifyProfileComponent },
  { path: 'SetProfilePicture', component: SetProfilePictureComponent },
  { path: 'Recipe', component: RecipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
