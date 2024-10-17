import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { RecipeInterface } from '../recipe-interface';
import { RecipesComponent } from '../6.recipes/recipes.component';
import { NgFor } from '@angular/common';
import { RecipeDetailsComponent } from "../7.recipe-details/recipe-details.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RecipesComponent, NgFor, RecipeDetailsComponent],
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
}
