import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-github-login',
  standalone: true,
  imports: [],
  template: `
    <button class="p-2 border flex items-center rounded-md" (click)="login()">
      Login
    </button>
  `,
  styleUrl: './github-login.component.scss',
})
export class GithubLoginComponent {
  constructor(private auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }
}
