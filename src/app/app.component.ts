import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LottieComponent } from 'ngx-lottie';
import { AboutComponent } from "./9.about/about.component";
import { NavbarComponent } from "./1.navbar/navbar.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-sharing';
  
  
  
}
