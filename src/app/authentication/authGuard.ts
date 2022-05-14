import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class MyRouterGuardService implements CanActivate {
  constructor(public router: Router, public authService: AuthService) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/auth/signin']);
        resolve(false);
      }

      // this.router.navigate(['/store']);
      resolve(true);
    });
  }
}
