import { Component, AfterViewInit, OnInit, Output, EventEmitter } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LottieComponent, NgbDropdownModule,RouterLink,RouterModule,NgClass,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  logo = {
    path: 'assets/logo.json',
  };
  nav!: HTMLElement;
  @Output() modeChange = new EventEmitter<boolean>();
  isDarkMode = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.modeChange.emit(this.isDarkMode);
  }
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
