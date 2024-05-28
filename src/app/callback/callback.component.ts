import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss',
})
export class CallbackComponent {
  code!: string;
  constructor(
    private authService:AuthService,
    private _http: HttpClient,
    _route: ActivatedRoute,
  ) {
    _route.queryParamMap.subscribe({
      next: (res) => {
        this.code = res.get('code') ?? '';
        _http
          .post('http://localhost:4201/auth/login', {
            code: this.code,
          })
          .subscribe({
            next: (resp) => console.log(resp),
            error: (err) => console.error(err),
          });
      },
      error: (err) => console.error(err),
    });
  }
}
