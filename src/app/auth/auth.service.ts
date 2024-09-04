import { Injectable, signal } from '@angular/core';
import { AuthService as GitAuth } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any = signal({});
  isLoggedIn: any = signal(false);

  constructor(private auth: GitAuth) {}

  loadUser() {
    return this.auth.user$
  }
}
