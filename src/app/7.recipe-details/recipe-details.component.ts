import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LottieComponent } from 'ngx-lottie';
import { FavoritesService } from '../services/favorites.service';
import { RecipeInterface } from '../recipe-interface';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [HttpClientModule,FormsModule,NgFor, NgIf,LottieComponent],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
 data:any;
  itemId:any;
  currentItem: any;
  loading = {
    path: 'assets/loading.json',
  };
 isloading:boolean=true;

  constructor(private http: HttpClient,private active:ActivatedRoute, private favoritesService: FavoritesService) {}

  ngOnInit(): void {

    this.itemId = this.active.snapshot.params['id'];
    console.log(this.itemId);
  
  
    this.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
  
       
        this.currentItem = this.data.find((item: { id: number }) => item.id === Number(this.itemId));
        console.log(this.currentItem);
        this.isloading=false;
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );


    this.isFavorite = this.favoritesService.isFavorite(this.recipe.id);
  }
  
  getData(): Observable<any> {
    const apiUrl = 'https://jawadtamer.github.io/recipesApi/api.json'; 
    return this.http.get<any>(apiUrl);
  }

  @Input() recipe! : RecipeInterface;
  isFavorite: boolean = false;

  toggleFavorite() {
    if (this.isFavorite) {
      this.favoritesService.removeFromFavorites(this.recipe.id);
    } else {
      this.favoritesService.addToFavorites(this.recipe);
    }
    this.isFavorite = !this.isFavorite;
  }
}
