import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubLoginComponent } from '../auth/login/github-login/github-login.component';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule, GithubLoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  redirectUri = window.location.origin;
  repoDetails: any = {};
  constructor(
    private _http: HttpClient,
    public route: Router,
    public auth: AuthService,
  ) {
    _http.get('https://api.github.com/repos/sathwik-14/quikjs').subscribe({
      next: (res) => (this.repoDetails = res),
      error: () => (this.repoDetails.stargazers_count = 2),
    });
  }
}
