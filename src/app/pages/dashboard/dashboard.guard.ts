import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

export const dashboardGuard: CanActivateChildFn = (route, state) => {
  const auth = inject(AuthService);
  return auth.isLoggedIn;
};
