import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any[]=[];
  constructor(private data:DataService) {
    this.data.getAllCategories().subscribe((data:any)=>{
      this.categories=data;
    })
   }

  ngOnInit(): void {
  }

}
