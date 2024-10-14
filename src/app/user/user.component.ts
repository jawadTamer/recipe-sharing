import { Component } from '@angular/core';
import { UserDetailsComponent } from './10.user-details/user-details.component';
import { ShareCardComponent } from './share-card/share-card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserDetailsComponent,ShareCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
