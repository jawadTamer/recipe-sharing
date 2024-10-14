import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-share-card',
  standalone: true,
  imports: [NgClass,NgFor,NgIf,NgbRatingModule,RouterModule],
  templateUrl: './share-card.component.html',
  styleUrl: './share-card.component.css'
})
export class ShareCardComponent {
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = false;
  }
  from:string = "sharing";
  shareList:any = JSON.parse(localStorage.getItem('sharelist') || '[]');

}
