import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  book:any;
  id:any;

  constructor(private router:Router,private dataService: DataService,private activatedRoute:ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.paramMap.get('bookId');
    this.dataService.getBooksById(this.id).subscribe((response:any)=>{
      this.book=response;
      
    });
   }


   addToCart(){
    this.dataService.addToCart(localStorage.getItem('userId'),this.id).subscribe((resp)=>{
      console.log(resp);
    });
   }
   addToWishList(){
    
    this.dataService.addToWishList(localStorage.getItem('userId'),this.id).subscribe((resp)=>{
      console.log(resp);
    });
   }
   
   removeFromCart(){
    this.dataService.removeFromCart(localStorage.getItem('userId'),this.id).subscribe((resp)=>{
      console.log(resp);
    });
   }
   removeFromWishList(){
    this.dataService.removeFromWishList(localStorage.getItem('userId'),this.id).subscribe((resp)=>{
      console.log(resp);
    });
   }

  ngOnInit(): void {
  }

}
