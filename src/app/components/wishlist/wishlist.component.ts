import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  books:any[]=[];
  userId:any;
  cart:any[]=[]
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute,private router:Router) { 
    this.userId=localStorage.getItem('userId');
    // this.userId=5;
    console.log(this.userId);
    this.dataService.getWishList(this.userId).subscribe((data)=>{
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
