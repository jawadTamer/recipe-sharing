import { CanActivateFn, Router } from '@angular/router';


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
