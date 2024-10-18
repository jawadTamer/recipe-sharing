import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { LottieComponent } from 'ngx-lottie';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    NgFor,
    NgbRatingModule,
    RouterModule,
    NgIf,
    NgClass,
    LottieComponent,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  data: any;
  favorites: any[] = [];
  fromWhere: string = 'recipes';
  userName: string | null = null;
  loading = {
    path: 'assets/loading.json',
  };
  isloading: boolean = true;

  constructor(private http: HttpClient, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = false;
  }

  ngOnInit(): void {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser && storedUser.username) {
      this.userName = storedUser.username;
    }

    this.getData().subscribe(
      (response) => {
        setTimeout(() => {
          this.data = response;
          this.isloading = false;
          this.loadFavorites();
        }, 1000);
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );
  }

  getData(): Observable<any> {
    const apiUrl = 'https://jawadtamer.github.io/recipesApi/api.json';
    return this.http.get<any>(apiUrl);
  }

  addToFavorites(recipe: any) {
    const index = this.favorites.findIndex((fav) => fav.id === recipe.id);
    if (index === -1) {
      this.favorites.push(recipe);
    } else {
      this.favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavorites() {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    this.favorites = storedFavorites;
  }

  isFavorite(recipe: any): boolean {
    return this.favorites.some((fav) => fav.id === recipe.id);
  }
}
