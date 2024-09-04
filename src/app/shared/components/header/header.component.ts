import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubLoginComponent } from '../../../auth/login/github-login/github-login.component';
import { AuthService } from '../../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { NgxNumberTickerComponent } from '@omnedia/ngx-number-ticker';
import { AuthService as GitAuth } from '@auth0/auth0-angular'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule, GithubLoginComponent, NgxNumberTickerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  redirectUri = window.location.origin;
  repoDetails: any = {};
  constructor(
    private _http: HttpClient,
    public route: Router,
    public _sidebar: SidebarService,
    public auth: AuthService,
    public gitAuth: GitAuth,
  ) {
    this._http.get('https://api.github.com/repos/sathwik-14/quikjs').subscribe({
      next: (res) => (this.repoDetails = res),
      error: () => (this.repoDetails.stargazers_count = 2),
    });
    console.log(auth.user())
  }

  logout(params: any) {
    this.gitAuth.logout(params).subscribe()
  }
}
