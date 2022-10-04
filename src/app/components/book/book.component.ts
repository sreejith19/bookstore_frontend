import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:any[]=[];
  
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute,private router:Router) {
    
    this.dataService.getAllBooks().subscribe((data:any)=>{
      this.books=data;
    })
   }

  ngOnInit(): void {
  }

}
