import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LottieComponent } from 'ngx-lottie';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-sharing';
  
  
  
}
