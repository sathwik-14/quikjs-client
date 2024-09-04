import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgxMarqueeComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit{
  cdr = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.cdr.detectChanges()
  }
}
