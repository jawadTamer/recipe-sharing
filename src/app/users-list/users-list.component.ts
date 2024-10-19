import { Router, RouterLink, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterLink,RouterModule, HttpClientModule, FormsModule, NgFor, NgIf],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  userName: string | null = null; 
  userimage: string | null = null; 
  useremail: string | null = null; 
  users: any;

  constructor(private http: HttpClient, private active: ActivatedRoute,  private router: Router) {}

  
  
  loadUserDetails(): void {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser) {
      this.userName = storedUser.username; 
      this.userimage = storedUser.image; 
      this.useremail = storedUser.email; 
    }
  }
  
  ngOnInit(): void {
    
    this.loadUserDetails();

      this.getData().subscribe(
        (response) => {
          this.users = response;
         console.log(this.users);
         
        },
        (error) => {
          console.error('Error occurred while fetching users:', error);
        }
      );
  

    
  }

  getData(): Observable<any> {
    const apiUrl = 'https://randomuser.me/api/?results=40';
    return this.http.get<any>(apiUrl);
  }
}
