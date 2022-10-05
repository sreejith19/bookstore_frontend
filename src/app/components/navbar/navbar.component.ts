import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  onLoginButtonClick(){
    this.router.navigateByUrl('login');
  }onLogoutButtonClick(){
    
    this.auth.logout();
    this.router.navigateByUrl('login');
  }
  onBooks(){
    this.router.navigateByUrl('books');
  }
  ngOnInit(): void {
  }

}
