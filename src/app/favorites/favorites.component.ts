import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { RecipeInterface } from '../recipe-interface';

@Component({
  selector: 'app-favorites',
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
