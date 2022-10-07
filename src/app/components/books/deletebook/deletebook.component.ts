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
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  message='';
  registerForm = this.fb.group({
    bookId:[null,[Validators.required,Validators.pattern("^[0-9]*$")]],
  });
  constructor(private fb: FormBuilder, private dataService: DataService, private router:Router) {}
   
  get bookId() {
    return this.registerForm.get('bookId');
  }

  ngOnInit(): void {
  }

  onTest(){
    this.registerForm.reset();
  }
  onSubmitHandler() {
    var result=this.dataService.deleteBook(this.registerForm.get('bookId')!.value);
    this.message=result?"Book deleted":"delete Failed";
    if(result){
      this.registerForm.reset();
    }
  }
}
