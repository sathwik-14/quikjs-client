import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  repoDetails:any = {};
constructor(private _http:HttpClient,public route:Router) {
_http.get('https://api.github.com/repos/sathwik-14/quikjs').subscribe({
  next:(res)=>(this.repoDetails = res),
  error:()=>(this.repoDetails.stargazers_count = 2)
})
}
}
