// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UserRegister } from '../models/auth.register';
import { UserLogin } from '../models/auth.login';
import { UserProfile } from '../models/userprofile';
import { Diet } from '../models/diet';
import { AddRecipeToLast24H } from '../models/last24h.new.recipe';
import { Oil } from '../models/oil';
import { CreateIngredient } from '../models/recipe.ingredient';
import { UpdateRecipe } from '../models/recipe.update';
import { CreateRecipe } from '../models/recipe.create';
import { ResetPassword } from '../models/auth.reset.password';
import { WriteComment } from '../models/socialmedia.write.comment';
import { CreateTag } from '../models/tag.create';
import { UpdateTag } from '../models/tag.update';
import jwt_decode from 'jwt-decode';
import { DecodedToken } from '../models/decoded.token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //Auth

  getAuth(authId: string): Observable<string> {
    return this.http.get<any>(
      `${environment.APIUrl}/Auth/get-auth?authId=${authId}`
    );
  }
  getUserProfile(authId: string): Observable<any> {
    return this.http.get(
      `${environment.APIUrl}/Auth/get-userprofile?authId=${authId}`
    );
  }
  register(userRegister: UserRegister): Observable<any> {
    return this.http.put(`${environment.APIUrl}/Auth/register`, userRegister);
  }
  login(userLogin: UserLogin): Observable<any> {
    return this.http.post(`${environment.APIUrl}/Auth/login`, userLogin, {
      responseType: 'text',
    });
  }
  forgotPassword(email: string): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/Auth/forgot-password?email=${email}`,
      { responseType: 'text' }
    );
  }
  resetPassword(resetPassword: ResetPassword): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/Auth/reset-password?token=${resetPassword.token}`,
      resetPassword,
      { responseType: 'text' }
    );
  }

  //Diets

  createDiet(diet: Diet): Observable<Diet> {
    return this.http.put<Diet>(`${environment.APIUrl}/Diet/create`, diet);
  }
  updateDiet(diet: Diet): Observable<void> {
    return this.http.patch<void>(`${environment.APIUrl}/Diet/update`, diet);
  }

  deleteDiet(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.APIUrl}/Diet/delete?id=${id}`);
  }
  getAllDiets(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.APIUrl}/Diet/get-all`);
  }

  //Last24H
  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  getRecipeFromLast24h(): Observable<void[]> {
    return this.http.get<void[]>(
      `${environment.APIUrl}/Last24h/get-all?date=${this.getTodayDate()}`
    );
  }
  addRecipeToLast24H(recipe: AddRecipeToLast24H): Observable<void> {
    return this.http.put<void>(
      `${environment.APIUrl}/Last24h/add-new-recipe`,
      recipe
    );
  }
  deleteRecipeFromLast24h(id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.APIUrl}/Last24h/delete?id=${id}`
    );
  }
  updateLast24hHalfPortion(id: number): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/Last24h/half-portion?id=${id}`,
      null
    );
  }
  updateLast24hThirdPortion(id: number): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/Last24h/third-portion?id=${id}`,
      null
    );
  }
  updateLast24hQuarterPortion(id: number): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/Last24h/quarter-portion?id=${id}`,
      null
    );
  }
  updateLast24hDoublePortion(id: number): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/Last24h/double-portion?id=${id}`,
      null
    );
  }

  //Oil

  createOil(oil: any): Observable<any> {
    return this.http.put(`${environment.APIUrl}/Oil/create`, oil);
  }
  deleteOil(id: number): Observable<any> {
    return this.http.delete(`${environment.APIUrl}/Oil/delete?id=${id}`);
  }
  getAllOils(): Observable<any> {
    return this.http.get<any>(`${environment.APIUrl}/Oil/get-all`);
  }

  //Recipe

  getRecommendedTags(recipeId: number): Observable<string[]> {
    return this.http.get<string[]>(
      `${environment.APIUrl}/Recipe/get-recommended-tags?recipeId=${recipeId}`
    );
  }
  createIngredient(recipe: CreateIngredient): Observable<CreateIngredient> {
    return this.http.put<CreateIngredient>(
      `${environment.APIUrl}/Recipe/create-simple`,
      recipe
    );
  }
  updateRecipeSimple(recipe: CreateIngredient): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/Recipe/update-simple`,
      recipe
    );
  }
  replaceRecipeSimple(
    recipeId: number,
    recipe: UpdateRecipe
  ): Observable<void> {
    return this.http.put<void>(
      `${environment.APIUrl}/Recipe/${recipeId}`,
      recipe
    );
  }
  verifyRecipe(id: number): Observable<void> {
    return this.http.patch<void>(
      `${environment.APIUrl}/Recipe/verify?id=${id}`,
      null
    );
  }
  addTagsToRecipe(request: any): Observable<void> {
    return this.http.patch<void>(
      `${environment.APIUrl}/Recipe/add-tags`,
      request
    );
  }
  likeUnlke(recipeId: number): Observable<void> {
    return this.http.patch<void>(
      `${environment.APIUrl}/Recipe/like-unlike?recipeId=${recipeId}`,
      null
    );
  }
  getAllRecipesByAuthId(authId: number): Observable<CreateRecipe[]> {
    return this.http.get<CreateRecipe[]>(
      `${environment.APIUrl}/Recipe/get-all-recipe-by-auth-id?authId=${authId}`
    );
  }
  createRecipe(request: CreateRecipe): Observable<CreateRecipe> {
    return this.http.put<CreateRecipe>(
      `${environment.APIUrl}/Recipe/create`,
      request
    );
  }
  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${environment.APIUrl}/Recipe/delete?id=${id}`);
  }
  getAllRecipe(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.APIUrl}/Recipe/get-all`);
  }

  //SocialMedia

  unfollowFollow(email: string): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/SocialMedia/unfollow-follow`,
      email
    );
  }
  writeComment(request: WriteComment): Observable<any> {
    return this.http.put(
      `${environment.APIUrl}/SocialMedia/write-comment`,
      request
    );
  }
  deleteComment(commentId: number) {
    return this.http.delete(
      `${environment.APIUrl}/SocialMedia/delete-comment?commentId=${commentId}`
    );
  }
  modifyComment(commentId: number, body: string): Observable<any> {
    const requestBody = {
      commentId: commentId,
      body: body,
    };
    return this.http.patch(
      `${environment.APIUrl}/SocialMedia/modify-comment`,
      requestBody
    );
  }
  getAllCommentsByEmail(): Observable<any> {
    return this.http.get(
      `${environment.APIUrl}/SocialMedia/get-all-comment-by-authenticated-email`
    );
  }

  //Tags

  createTag(tagCreate: any): Observable<any> {
    return this.http.put<any>(`${environment.APIUrl}/Tag/create`, tagCreate);
  }
  deleteTag(tagId: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.APIUrl}/Tag/delete?id=${tagId}`
    );
  }
  getAllTags(): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.APIUrl}/Tag/get-all`
    );
  }

  //UserProfile

  getUserProfileById(userId: number): Observable<UserProfile> {
    const params = { id: userId.toString() };
    return this.http.get<UserProfile>(
      `${environment.APIUrl}/UserProfile/read-profile`,
      { params }
    );
  }
  getRecommendedDiets(): Observable<any> {
    return this.http.get<any>(
      `${environment.APIUrl}/UserProfile/get-recommended-diets`
    );
  }
  addDiet(dietId: number): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/UserProfile/add-diet?dietId=${dietId}`,
      null
    );
  }
  removeDiet(dietId: number): Observable<void> {
    const params = { dietId: dietId.toString() };
    return this.http.patch<void>(
      `${environment.APIUrl}/UserProfile/remove-diet`,
      null,
      { params }
    );
  }
  createProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(
      `${environment.APIUrl}/UserProfile/create-profile`,
      profile
    );
  }
  modifyProfile(modifiedProfile: UserProfile): Observable<any> {
    return this.http.patch(
      `${environment.APIUrl}/UserProfile/modify-profile`,
      modifiedProfile
    );
  }
  setProfilePicture(profilePicture: any): Observable<any> {
    return this.http.patch<any>(
      `${environment.APIUrl}/UserProfile/set-profile-picture`,
      profilePicture
    );
  }

  isLoggedIn() {
    if (localStorage.getItem('authToken')) return true;
    else return false;
  }
  isAdmin() {
    if (this.isLoggedIn()) {
      const authToken = localStorage.getItem('authToken');
      const decodedToken = jwt_decode(authToken!) as any;
      const role =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];
      if (role == 'Admin') return true;
      else return false;
    } else return;
  }
}
