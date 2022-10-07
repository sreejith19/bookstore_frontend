import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginResponse = ''
  loginClass = ''
  loginForm = this.fb.group({
    userName: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {}
   
  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }
  onSubmitHandler() {
    this.authService.adminLogin(this.loginForm.value).subscribe(
      (response) => {
        //console.log(response);
        this.loginResponse = "login successfully, thank you"
        this.loginClass = 'alert-success'
        
    localStorage.setItem('token',response);
    localStorage.setItem('loginstatus',"admin");
    this.router.navigateByUrl('home');
      },
      (error) => {
        //console.log(error)
        this.loginResponse = "login failed, try again"
        this.loginClass = 'alert-danger'
      }
    );
  }
}
