import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, NgbRatingModule, NgClass],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];
  fromWhere: string = 'recipes';

  ngOnInit(): void {
    this.loadFavorites();
    
  }

  loadFavorites() {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favorites = storedFavorites;
  }

  removeFavorite(recipe: any) {
    const index = this.favorites.findIndex(fav => fav.id === recipe.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
    
  }
}

