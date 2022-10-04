import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  onLoginButtonClick(){
    this.router.navigateByUrl('login');
  }
  onBooks(){
    this.router.navigateByUrl('books');
  }
  ngOnInit(): void {
  }

}
