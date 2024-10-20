import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LottieComponent, RouterModule ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  logo = {
    path: 'assets/home.json',
  };
}
