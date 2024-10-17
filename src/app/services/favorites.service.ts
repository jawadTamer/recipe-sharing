import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipeInterface } from '../recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteRecipes: RecipeInterface[] = [];
  private favoritesSubject = new BehaviorSubject<RecipeInterface[]>(this.favoriteRecipes);

  constructor() {}

  getFavorites() {
    return this.favoritesSubject.asObservable();
  }

  addToFavorites(recipe: RecipeInterface) {
    if (!this.favoriteRecipes.find(r => r.id === recipe.id)) {
      this.favoriteRecipes.push(recipe);
      this.favoritesSubject.next([...this.favoriteRecipes]);
    }
  }

  removeFromFavorites(recipeId: number) {
    this.favoriteRecipes = this.favoriteRecipes.filter(r => r.id !== recipeId);
    this.favoritesSubject.next([...this.favoriteRecipes]);
  }

  isFavorite(recipeId: number): boolean {
    return this.favoriteRecipes.some(r => r.id === recipeId);
  }
}
