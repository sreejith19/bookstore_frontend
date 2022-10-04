import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  book:any;
  id:any;

  constructor(private dataService: DataService,private activatedRoute:ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.paramMap.get('bookId');
    this.dataService.getBooksById(this.id).subscribe((response:any)=>{
      this.book=response;
    });
   }

  ngOnInit(): void {
  }

}
