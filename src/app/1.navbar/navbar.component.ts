import { Component, AfterViewInit, OnInit } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LottieComponent, NgbDropdownModule,RouterLink,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  logo = {
    path: 'assets/logo.json',
  };
  nav!: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    this.nav = document.querySelector('.navbarlink') as HTMLElement;
  }

  toggle() {
    if (this.nav) {
      this.nav.classList.toggle('active');
    }
  }
}
