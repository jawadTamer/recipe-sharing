import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, NgClass, FormsModule, NgIf, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  isSignUpMode: boolean = false;
  selectedImage: string | ArrayBuffer | null = null;

  toggleSignUp() {
    this.isSignUpMode = true;
  }

  toggleSignIn() {
    this.isSignUpMode = false;
  }

  constructor(private router: Router) {}

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result; 
      };
      reader.readAsDataURL(file);
    }
  }

  register(signUpForm: NgForm) {
    if (signUpForm.valid) {
      const { signupUsername, signupPhoneNumber, signupEmail, signupPassword } = signUpForm.value;

      const user = {
        username: signupUsername,
        phoneNumber: signupPhoneNumber,
        email: signupEmail,
        password: signupPassword,
        image: this.selectedImage 
      };

      localStorage.setItem('user', JSON.stringify(user));

      Swal.fire({
        title: 'Success!',
        text: 'You have successfully signed up! Now you can log in.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      this.toggleSignIn(); 
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      const { loginUsername, loginPassword } = loginForm.value;

      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      console.log("Stored user:", storedUser); 

      if (storedUser.email === loginUsername && storedUser.password === loginPassword) {
        Swal.fire({
          title: 'Success!',
          text: 'Login successful! Welcome back.',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        this.router.navigate(['recipes']);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Login failed. Either you are not signed up or wrong email or password.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}
