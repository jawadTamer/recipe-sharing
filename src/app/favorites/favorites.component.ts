import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { RecipeInterface } from '../recipe-interface';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, NgbRatingModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteRecipes: RecipeInterface[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoritesService.getFavorites().subscribe(favorites => {
      this.favoriteRecipes = favorites;
    });
  }

  removeFromFavorites(recipeId: number) {
    this.favoritesService.removeFromFavorites(recipeId);
    this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.id !== recipeId);
  }
}
