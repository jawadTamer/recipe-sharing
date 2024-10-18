import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user && user.username) {
      return true; // User is logged in
    }
    this.router.navigate(['/signup']); // Redirect to signup if not logged in
    return false;
  }
}


const isAuthenticated = (): boolean => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return !!user;
};


export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  if (!isAuthenticated()) {

    router.navigate(['signup']);
    return false;
  }
  return true;
};
