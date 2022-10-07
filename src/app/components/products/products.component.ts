import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  books:any[]=[];
  catId:any;
  catName='';
  cart:any[]=[]
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute,private router:Router) { 
    this.catId=this.activatedRoute.snapshot.paramMap.get('catId')    // this.userId=5;
    console.log(this.catId);
    this.dataService.getCategoryById(this.catId).subscribe((data)=>{
      this.catName=data.catName;
    })
    this.dataService.getBooksByCategory(this.catId).subscribe((data)=>{
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
