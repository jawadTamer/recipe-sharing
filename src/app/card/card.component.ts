import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, NgFor, NgbRatingModule,RouterModule, NgIf, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any =[]
}
