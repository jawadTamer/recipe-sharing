import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';
import { CardsComponent } from "./3.home/cards/cards.component";
import { RecipesComponent } from "./6.recipes/recipes.component";
import { RecipeDetailsComponent } from "./7.recipe-details/recipe-details.component";

=======
import { RouterLink, RouterOutlet } from '@angular/router';
>>>>>>> 3f3fece566bf77dedf62bf035afabc0524e4ea5d

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, LottieComponent, CardsComponent, RecipesComponent, RecipeDetailsComponent],
=======
  imports: [RouterOutlet, RouterLink],
>>>>>>> 3f3fece566bf77dedf62bf035afabc0524e4ea5d
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {

}
