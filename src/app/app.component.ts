import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LottieComponent } from 'ngx-lottie';
import { AboutComponent } from "./9.about/about.component";
import { NavbarComponent } from "./1.navbar/navbar.component";
import { FooterComponent } from "./2.footer/footer.component";
import { NgClass } from '@angular/common';
import { UserDetailsComponent } from './user/10.user-details/user-details.component';
import { UserComponent } from './user/user.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, NavbarComponent, FooterComponent,NgClass,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-sharing';
  isDarkMode = false;
  down = false;

  onModeChange(isDark: boolean) {
    this.isDarkMode = isDark;
  }

  Upwindow(){
    window.scrollTo( 0 , 0);
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 500) {
      this.down = true;
    }
    else{
      this.down = false;
    }
    
  }
  
}
