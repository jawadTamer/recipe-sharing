import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';
import { CardsComponent } from "./3.home/cards/cards.component";
import { RecipesComponent } from "./6.recipes/recipes.component";
import { RecipeDetailsComponent } from "./7.recipe-details/recipe-details.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent, CardsComponent, RecipesComponent, RecipeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'recipe-sharing';
  options = {
    path: 'assets/a.json', // Point this to your Lottie animation JSON
  };

}
