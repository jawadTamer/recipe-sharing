import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userName: string |  null = null; 
  userimage: string |  null = null; 
  usernumber: string |  null = null; 
  useremail: string |  null = null; 
  ngOnInit(): void {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser) {
      this.userName= storedUser.username; 
      this.userimage= storedUser.image; 
      this.usernumber= storedUser.phoneNumber; 
      this.useremail= storedUser.email; 
    }
}
}
