import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './3.home/home.component';
import { RecipeDetailsComponent } from './7.recipe-details/recipe-details.component';
import { RecipesComponent } from './6.recipes/recipes.component';
import { SignupComponent } from './4.signup/signup.component';
import { SharingComponent } from './8.sharing/sharing.component';
import { AboutComponent } from './9.about/about.component';
import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./3.home/home.component').then(c => c.HomeComponent),
  // },
  // {
  //   path: 'signup',
  //   loadComponent: () => import('./4.signup/signup.component').then(c => c.SignupComponent),
  // },
  // {
  //   path: 'recipes',
  //   loadComponent: () => import('./6.recipes/recipes.component').then(c => c.RecipesComponent),
  // },
  // {
  //   path: 'home/recipes',
  //   loadComponent: () => import('./6.recipes/recipes.component').then(c => c.RecipesComponent),
  // },
  // {
  //   path: 'recipes/recipe-details/:id',
  //   loadComponent: () => import('./7.recipe-details/recipe-details.component').then(c => c.RecipeDetailsComponent),
  //   canActivate: [authGuard],
  // },
  // {
  //   path: 'recipe-details/:id',
  //   loadComponent: () => import('./7.recipe-details/recipe-details.component').then(c => c.RecipeDetailsComponent),
  //   canActivate: [authGuard],
  // },
  // {
  //   path: 'home/recipe-details/:id',
  //   loadComponent: () => import('./7.recipe-details/recipe-details.component').then(c => c.RecipeDetailsComponent),
  //   canActivate: [authGuard],
  // },
  // {
  //   path: 'home/recipes/recipe-details/:id',
  //   loadComponent: () => import('./7.recipe-details/recipe-details.component').then(c => c.RecipeDetailsComponent),
  //   canActivate: [authGuard],
  // },
  // {
  //   path: 'sharing',
  //   loadComponent: () => import('./8.sharing/sharing.component').then(c => c.SharingComponent),
  //   canActivate: [authGuard],
  // },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./9.about/about.component').then(c => c.AboutComponent),
  // },
  // {
  //   path: 'user-details',
  //   loadComponent: () => import('./10.user-details/user-details.component').then(c => c.UserDetailsComponent),
  //   canActivate: [authGuard],
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./3.home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'recipes',
        children: [
          {
            path:'',
        loadComponent: () =>
          import('./6.recipes/recipes.component').then(
            (c) => c.RecipesComponent
          ),           
          },
          {
            path: 'recipe-details/:id/:fromWhere',
            loadComponent: () =>
              import('./7.recipe-details/recipe-details.component').then(
                (c) => c.RecipeDetailsComponent
              ),
            canActivate: [authGuard],
          },
        ],
        // loadComponent: () =>
        //   import('./6.recipes/recipes.component').then(
        //     (c) => c.RecipesComponent
        //   ),
      },
      {
        path: 'recipe-details/:id/:fromWhere',
        loadComponent: () =>
          import('./7.recipe-details/recipe-details.component').then(
            (c) => c.RecipeDetailsComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./4.signup/signup.component').then((c) => c.SignupComponent),
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./6.recipes/recipes.component').then(
            (c) => c.RecipesComponent
          ),
      },
      {
        path: 'recipe-details/:id/:fromWhere',
        loadComponent: () =>
          import('./7.recipe-details/recipe-details.component').then(
            (c) => c.RecipeDetailsComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'sharing',
    loadComponent: () =>
      import('./8.sharing/sharing.component').then((c) => c.SharingComponent),
    canActivate: [authGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./9.about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'users-list',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./users-list/users-list.component').then((c) => c.UsersListComponent),
        canActivate: [authGuard],
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./user/user.component').then(
            (c) => c.UserComponent
          ),
        
      },
    ],
   
  },
  {
    path: 'user', children: [
      {
        path: '',
        loadComponent: () =>
          import('./user/user.component').then(
            (c) => c.UserComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'sharing',
    loadComponent: () =>
      import('./8.sharing/sharing.component').then((c) => c.SharingComponent),
    canActivate: [authGuard],
      },
      {
        path: 'recipe-details/:id/:fromWhere',
        loadComponent: () =>
          import('./7.recipe-details/recipe-details.component').then(
            (c) => c.RecipeDetailsComponent
          ),
        canActivate: [authGuard],
      },
    ],
   
  },
  { path: 'favorites',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./favorites/favorites.component').then((c) => c.FavoritesComponent),
        canActivate: [authGuard],
      },
      {
        path: 'recipe-details/:id/:fromWhere',
        loadComponent: () =>
          import('./7.recipe-details/recipe-details.component').then(
            (c) => c.RecipeDetailsComponent
          ),
        canActivate: [authGuard],
      },
    ],
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
