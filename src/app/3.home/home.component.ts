import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LottieComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
