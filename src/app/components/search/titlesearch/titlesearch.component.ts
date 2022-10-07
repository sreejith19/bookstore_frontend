import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-titlesearch',
  templateUrl: './titlesearch.component.html',
  styleUrls: ['./titlesearch.component.css']
})
export class TitlesearchComponent implements OnInit {
  
  searchForm = this.fb.group({
    title: [null, [Validators.required]]
  });
  constructor(private fb: FormBuilder,private dataService:DataService, private router:Router) {}
   
  get title() {
    return this.searchForm.get('title');
  }
  books:any[]=[];
  display='';
  ngOnInit(): void {
  }
  onSubmitHandler() {
    this.dataService.getBooksByName(this.searchForm.get('title')!.value).subscribe(
      (response) => {
        this.books=response;
        this.display=this.books.length+" results";
    });
  }
}
