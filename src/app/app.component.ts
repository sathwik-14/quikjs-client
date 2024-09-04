import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.loadUser().subscribe((res) => {
      if (res) {
        this.auth.user.update((e: any) => ({ ...res }));
        this.auth.isLoggedIn.update((e: any) => true);
        console.log(res);
      } else {
        this.auth.isLoggedIn.update((e: any) => false);
      }
    });
  }
}
