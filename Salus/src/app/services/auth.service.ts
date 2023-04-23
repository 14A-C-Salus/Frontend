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
import { Recipe } from '../models/recipe.simple';
import { UpdateRecipe } from '../models/recipe.update';
import { WriteRecipe } from '../models/recipe.create';
import { AddTag } from '../models/recipe.tag';
import { ResetPassword } from '../models/auth.reset.password';
import { WriteComment } from '../models/socialmedia.write.comment';
import { CreateTag } from '../models/tag.create';
import { UpdateTag } from '../models/tag.update';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    //Auth

    getAuth(authId: string): Observable<string> {
      return this.http.get<any>(`${environment.APIUrl}/Auth/get-auth?authId=${authId}`)
    }
    getUserProfile(authId: string): Observable<any> {
      return this.http.get(`${environment.APIUrl}/Auth/get-userprofile?authId=${authId}`);
    }
    register(userRegister: UserRegister): Observable<any>{
      return this.http.put(`${environment.APIUrl}/Auth/register`, userRegister)
    }
    login(userLogin: UserLogin): Observable<any> {
      return this.http.post(`${environment.APIUrl}/Auth/login`, userLogin, {responseType: 'text'});
    }
    forgotPassword(email: string): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Auth/forgot-password?email=${email}`, {responseType: 'text'});
    }
    resetPassword(resetPassword: ResetPassword): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Auth/reset-password`, resetPassword, { responseType: 'text' });
    }

    //Diets

    createDiet(diet: Diet): Observable<Diet> {
      return this.http.put<Diet>(`${environment.APIUrl}/Diet/create`, diet);
    }
    updateDiet(diet: Diet): Observable<void> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      return this.http.patch<void>(`${environment.APIUrl}/Diet/update`, diet, httpOptions);
    }

    deleteDiet(id: number): Observable<void> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      return this.http.delete<void>(`${environment.APIUrl}/Diet/delete?id=${id}`, httpOptions);
    }

    //Last24H

    addRecipeToLast24H(recipe: AddRecipeToLast24H): Observable<void> {
      return this.http.put<void>(`${environment.APIUrl}/Last24h/add-new-recipe`, recipe);
    }
    deleteRecipeFromLast24h(id: number): Observable<void> {
      return this.http.delete<void>(`${environment.APIUrl}/Last24h/delete?id=${id}`);
    }
    updateLast24hHalfPortion(id: number): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Last24h/half-portion?id=${id}`, null);
    }
    updateLast24hThirdPortion(id: number): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Last24h/third-portion?id=${id}`, null);
    }
    updateLast24hQuarterPortion(id: number): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Last24h/quarter-portion?id=${id}`, null);
    }
    updateLast24hDoublePortion(id: number): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Last24h/double-portion?id=${id}`, null);
    }

    //Oil

    createOil(oil: Oil): Observable<any> {
      return this.http.put(`${environment.APIUrl}/Oil/create`, oil);
    }
    updateOil(oil: Oil): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Oil/create${oil.id}`, oil);
    }
    deleteOil(id: number): Observable<any> {
      return this.http.delete(`${environment.APIUrl}/Oil/delete?id=${id}`);
    }

    //Recipe

    getRecommendedTags(recipeId: number): Observable<string[]> {
      return this.http.get<string[]>(`${environment.APIUrl}/Recipe/get-recommended-tags?recipeId=${recipeId}`);
    }
    createSimpleRecipe(recipe: Recipe): Observable<void> {
      return this.http.put<void>(`${environment.APIUrl}/Recipe/create-simple`, recipe);
    }
    updateRecipe(recipe: Recipe): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/Recipe/update`, recipe);
    }
    replaceRecipe(recipeId: number, recipe: UpdateRecipe): Observable<void> {
      return this.http.put<void>(`${environment.APIUrl}/Recipe/${recipeId}`, recipe);
    }
    verifyRecipe(id: number): Observable<void> {
      return this.http.patch<void>(`${environment.APIUrl}/Recipe/verify?id=${id}`, null);
    }
    addTagsToRecipe(request: AddTag): Observable<void> {
      return this.http.patch<void>(`${environment.APIUrl}/Recipe/add-tags`, request);
    }
    likeUnlke(recipeId: number): Observable<void> {
      return this.http.patch<void>(`${environment.APIUrl}/Recipe/like-unlike?recipeId=${recipeId}`, null);
    }
    getAllRecipesByAuthId(authId: number): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(`${environment.APIUrl}/Recipe/get-all-recipe-by-auth-id?authId=${authId}`);
    }
    createRecipe(request: WriteRecipe): Observable<Recipe> {
      return this.http.put<Recipe>(`${environment.APIUrl}/Recipe/create`, request);
    }
    deleteRecipe(id: number): Observable<any> {
      return this.http.delete(`${environment.APIUrl}/delete?id=${id}`);
    }

    //SocialMedia

    unfollowFollow(email: string): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/SocialMedia/unfollow-follow`, email);
    }
    writeComment(request: WriteComment): Observable<any> {
      return this.http.put(`${environment.APIUrl}/SocialMedia/write-comment`, request);
    }
    deleteComment(commentId: number) {
      return this.http.delete(`${environment.APIUrl}/SocialMedia/delete-comment?commentId=${commentId}`);
    }
    modifyComment(commentId: number, body: string): Observable<any> {
      const requestBody = {
        commentId: commentId,
        body: body
      };
      return this.http.patch(`${environment.APIUrl}/SocialMedia/modify-comment`, requestBody);
    }
    getAllCommentsByEmail(): Observable<any> {
      return this.http.get(`${environment.APIUrl}/SocialMedia/get-all-comment-by-authenticated-email`);
    }

    //Tags

    createTag(tagCreate: CreateTag): Observable<any> {
      return this.http.put<any>(`${environment.APIUrl}/SocialMedia/create`, tagCreate);
    }
    updateTag(tagUpdateRequest: UpdateTag): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/SocialMedia/update`, tagUpdateRequest);
    }
    deleteTag(tagId: number): Observable<void> {
      return this.http.delete<void>(`${environment.APIUrl}/SocialMedia/delete?id=${tagId}`);
    }
  
    //UserProfile

    getUserProfileById(userId: number): Observable<UserProfile> {
      const params = { id: userId.toString() };
      return this.http.get<UserProfile>(`${environment.APIUrl}/UserProfile/read-profile`, { params });
    }
    getRecommendedDiets(): Observable<any> {
      return this.http.get<any>(`${environment.APIUrl}/UserProfile/get-recommended-diets`);
    }
    addDiet(dietId: number): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/UserProfile/add-diet?dietId=${dietId}`, null);
    }
    removeDiet(dietId: number): Observable<void> {
      const params = { dietId: dietId.toString() };
      return this.http.patch<void>(`${environment.APIUrl}/UserProfile/remove-diet`, null, { params });
    }
    createProfile(profile: UserProfile): Observable<UserProfile> {
      return this.http.put<UserProfile>(`${environment.APIUrl}/UserProfile/create-profile`, profile);
    }
    modifyProfile(modifiedProfile: UserProfile): Observable<any> {
      return this.http.patch(`${environment.APIUrl}/UserProfile/modify-profile`, modifiedProfile);
    }
    setProfilePicture(profilePicture: any): Observable<any> {
      return this.http.patch<any>(`${environment.APIUrl}/UserProfile/set-profile-picture`, profilePicture);
    }
  }
