import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
  import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LottieComponent, RouterModule, RouterLinkActive],
templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logo = {
    path: 'assets/logo.json',
  };
}
