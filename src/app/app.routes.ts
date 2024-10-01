import { Routes } from '@angular/router';
import { HomeComponent } from './3.home/home.component';
import { RecipeDetailsComponent } from './7.recipe-details/recipe-details.component';
import { RecipesComponent } from './6.recipes/recipes.component';
import { SignupComponent } from './4.signup/signup.component';
import { SharingComponent } from './8.sharing/sharing.component';
import { AboutComponent } from './9.about/about.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }
  ,
  {
    path: 'signup',
    component: SignupComponent,
  }
  ,
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'recipe-details/:id',
    component: RecipeDetailsComponent,
  }
  ,
  {
    path: 'sharing',
    component: SharingComponent,
  }
  ,
  {
    path: 'about',
    component: AboutComponent,
  }
  ,
  {
    path: '',
    component: HomeComponent,
  },
];
