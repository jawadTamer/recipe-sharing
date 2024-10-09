import { Routes } from '@angular/router';
import { HomeComponent } from './3.home/home.component';
import { RecipeDetailsComponent } from './7.recipe-details/recipe-details.component';
import { RecipesComponent } from './6.recipes/recipes.component';
import { SignupComponent } from './4.signup/signup.component';
import { SharingComponent } from './8.sharing/sharing.component';
import { AboutComponent } from './9.about/about.component';
import { authGuard } from './auth.guard';
import { UserDetailsComponent } from './10.user-details/user-details.component';

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
    path: 'home/recipes',
    component: RecipesComponent,
   
  },
  {
    path: 'recipes/recipe-details/:id',
    component: RecipeDetailsComponent,
    canActivate: [authGuard]
  }
  ,
    {path: 'recipe-details/:id',
    component: RecipeDetailsComponent,
    canActivate: [authGuard]
  }
  ,
  {
    path: 'home/recipe-details/:id',
    component: RecipeDetailsComponent,
    canActivate: [authGuard]
  }
  ,
  {
    path: 'home/recipes/recipe-details/:id',
    component: RecipeDetailsComponent,
    canActivate: [authGuard]
  }
  ,
  {
    path: 'sharing',
    component: SharingComponent,
    canActivate: [authGuard]
  }
  ,
  {
    path: 'about',
    component: AboutComponent,
  }
  ,
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'user-details',
    component:UserDetailsComponent ,
    canActivate: [authGuard]
  }
];
