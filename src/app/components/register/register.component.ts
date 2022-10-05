import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  RequiredValidator,
} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    userName: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone:[null,[Validators.required]],
    address:[null,[Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {}
   
  get userName() {
    return this.registerForm.get('userName');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get address() {
    return this.registerForm.get('address');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get password() {
    return this.registerForm.get('password');
  }

  ngOnInit(): void {
  }

  onSubmitHandler() {
    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log(response);
        
    localStorage.setItem('userId',response);
    this.router.navigateByUrl('login');
      },
      (error) => {
        
      }
    );
  }
}
