import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userName: string | null = null; 
  userimage: string | null = null; 
  usernumber: string | null = null; 
  useremail: string | null = null; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser) {
      this.userName = storedUser.username; 
      this.userimage = storedUser.image; 
      this.usernumber = storedUser.phoneNumber; 
      this.useremail = storedUser.email; 
    }
  }

  deleteAccount(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this account!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user');
    
        this.userName = null;
        this.userimage = null;
        this.usernumber = null;
        this.useremail = null;
    
        Swal.fire(
          'Deleted!',
          'Your account has been deleted.',
          'success'
        ).then(() => {
         
          this.router.navigate(['signup']);
        });
      }
    });
  }
}
