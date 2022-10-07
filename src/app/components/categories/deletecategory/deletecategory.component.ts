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
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent implements OnInit {
  message='';
  registerForm = this.fb.group({
    catId:[null,[Validators.required,Validators.pattern("^[0-9]*$")]],
  });
  constructor(private fb: FormBuilder, private dataService: DataService, private router:Router) {}
   
  get catId() {
    return this.registerForm.get('catId');
  }

  ngOnInit(): void {
  }

  onSubmitHandler() {
    var result=this.dataService.deleteCategory(this.registerForm.get('catId')!.value);
    this.message=result?"Category deleted":"delete Failed";
    if(result){
      this.registerForm.reset();
    }
  }
}
