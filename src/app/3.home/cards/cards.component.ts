import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, NgFor, NgbRatingModule,RouterModule, NgIf, NgClass],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  fromWhere:string = "recipes";
  favorites: any[] = [];
  data: any = [
      {
        "id": 1,
        "category": "Breakfast",
        "name": "Avocado Toast",
        "servings": 2,
        "ingredients": [
          {
            "name": "bread",
            "quantity": "2 slices"
          },
          {
            "name": "avocado",
            "quantity": "1"
          },
          {
            "name": "lemon juice",
            "quantity": "1 tbsp"
          },
          {
            "name": "salt",
            "quantity": "to taste"
          },
          {
            "name": "pepper",
            "quantity": "to taste"
          }
        ],
        "instructions": [
          "Toast the bread.",
          "Mash the avocado with lemon juice, salt, and pepper.",
          "Spread avocado mixture on toasted bread."
        ],
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/avocado-on-toast-96e3158.jpg?quality=90&resize=440,400",
        "rating": 4
      },
      {
        "id": 2,
        "category": "Breakfast",
        "name": "Greek Yogurt Parfait",
        "servings": 2,
        "ingredients": [
          {
            "name": "Greek yogurt",
            "quantity": "1 cup"
          },
          {
            "name": "honey",
            "quantity": "2 tbsp"
          },
          {
            "name": "granola",
            "quantity": "1/2 cup"
          },
          {
            "name": "fresh berries",
            "quantity": "1/2 cup"
          }
        ],
        "instructions": [
          "Layer yogurt, honey, granola, and berries in a glass.",
          "Repeat layers and serve."
        ],
        "image": "https://static.vecteezy.com/system/resources/previews/036/389/976/large_2x/ai-generated-greek-yogurt-parfait-layer-greek-yogurt-with-granola-fresh-berries-and-a-drizzle-of-honey-for-a-delicious-and-nutritious-parfait-background-image-photo.jpg",
        "rating": 5
      },
      {
        "id": 3,
        "category": "Lunch",
        "name": "Quinoa Salad",
        "servings": 4,
        "ingredients": [
          {
            "name": "quinoa",
            "quantity": "1 cup"
          },
          {
            "name": "cucumber",
            "quantity": "1"
          },
          {
            "name": "cherry tomatoes",
            "quantity": "1 cup"
          },
          {
            "name": "feta cheese",
            "quantity": "100g"
          },
          {
            "name": "olive oil",
            "quantity": "3 tbsp"
          },
          {
            "name": "lemon juice",
            "quantity": "2 tbsp"
          },
          {
            "name": "salt",
            "quantity": "to taste"
          },
          {
            "name": "pepper",
            "quantity": "to taste"
          }
        ],
        "instructions": [
          "Cook quinoa according to package instructions.",
          "Chop cucumber and cherry tomatoes.",
          "Mix quinoa, cucumber, tomatoes, and feta.",
          "Whisk olive oil, lemon juice, salt, and pepper, and toss with the salad."
        ],
        "image": "https://www.allrecipes.com/thmb/AfZ5pJYvZSrlltkHiimLIOdEtjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229156-Zesty-Quinoa-Salad-ddmps-4x3-104421-df647e343ce543769a038cccf4c6419c.jpg", 
        "rating": 4
      }
  ];

  constructor(config: NgbRatingConfig) {
   
    config.max = 5;

    config.readonly = false;
  }

  ngOnInit(): void {
    

   
          this.loadFavorites(); 
        
    
  }
  addToFavorites(recipe: any) {
    const index = this.favorites.findIndex(fav => fav.id === recipe.id);
    if (index === -1) {
      this.favorites.push(recipe);
    } else {
      this.favorites.splice(index, 1); 
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavorites() {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favorites = storedFavorites;
  }

  isFavorite(recipe: any): boolean {
    return this.favorites.some(fav => fav.id === recipe.id)
}}

