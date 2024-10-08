import { CanActivateFn, Router } from '@angular/router';

// Create a function to check user authentication
const isAuthenticated = (): boolean => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return !!user; // Returns true if user exists, false otherwise
};

// Export the authGuard function
export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router(); // Instantiate the Router
  if (!isAuthenticated()) {
    // User is not authenticated, redirect to SignupComponent
    router.navigate(['signup']);
    return false; // Prevent access
  }
  return true; // User is authenticated, allow access
};
