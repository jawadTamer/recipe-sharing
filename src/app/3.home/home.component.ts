import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { CardsComponent } from "./cards/cards.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LottieComponent, CardsComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
