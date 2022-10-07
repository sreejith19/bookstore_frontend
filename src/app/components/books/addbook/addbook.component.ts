import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  RequiredValidator,
} from '@angular/forms';
import { DataService } from 'src/app/data.service';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  message='';
  registerForm = this.fb.group({
    bookId:[null,[Validators.required,Validators.pattern("^[0-9]*$")]],
    catId:[null,[Validators.required,Validators.pattern("^[0-9]*$")]],
    title: [null, [Validators.required]],
    isbn: [null, [Validators.required]],
    year:[null,[Validators.required,Validators.pattern("^[0-9]*$")]],
    price:[null,[Validators.required,Validators.pattern("^[0-9].*$")]],
    description: [null, [Validators.required]],
    position: [null, [Validators.required]],
    image: [null],
    author: [null, [Validators.required]]
  });
  constructor(private fb: FormBuilder, private dataService: DataService, private router:Router) {}
   
  get bookId() {
    return this.registerForm.get('bookId');
  }

  get catId() {
    return this.registerForm.get('catId');
  }
  get title() {
    return this.registerForm.get('title');
  }
  get isbn() {
    return this.registerForm.get('isbn');
  }
  get year() {
    return this.registerForm.get('year');
  }
  get price() {
    return this.registerForm.get('price');
  }
  get description() {
    return this.registerForm.get('description');
  }
  get position() {
    return this.registerForm.get('position');
  }
  get image() {
    return this.registerForm.get('image');
  }
  get author() {
    return this.registerForm.get('author');
  }

  ngOnInit(): void {
  }

  onTest(){
    this.registerForm.reset();
  }
  onSubmitHandler() {
    var result=this.dataService.addBook(this.registerForm.value);
    this.message=result?"Book Added":"Add Failed";
    if(result){
      this.registerForm.reset();
    }
  }
}
