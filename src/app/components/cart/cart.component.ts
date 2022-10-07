import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books:any[]=[];
  userId:any;
  cart:any[]=[]
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute,private router:Router) { 
    this.userId=localStorage.getItem('userId');
    // this.userId=5;
    console.log(this.userId);
    this.dataService.getCart(this.userId).subscribe((data)=>{
      this.cart=data;
      console.log(data);
      this.cart.forEach(item => {
           this.dataService.getBooksById(item.bookId).subscribe((book)=>{
              this.books.push(book);
         
          })        
      });
      
    })
    
  }

  ngOnInit(): void {
  }

}
