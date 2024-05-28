import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { GithubLoginComponent } from './github-login/github-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GithubLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
}
