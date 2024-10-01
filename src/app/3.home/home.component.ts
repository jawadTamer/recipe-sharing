import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  options = {
    path: 'assets/a.json', // Point this to your Lottie animation JSON
  };
}
