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
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  message='';
  registerForm = this.fb.group({
    catId:[null,[Validators.required,Validators.pattern("^[0-9]*$")]],
    catName: [null, [Validators.required]],
    description: [null, [Validators.required]],
    catImage: [null],
    status:[null,[Validators.required,Validators.pattern("^[0-9]*$")]],
    position: [null, [Validators.required]]
  });
  constructor(private fb: FormBuilder, private dataService: DataService, private router:Router) {}
   

  get catId() {
    return this.registerForm.get('catId');
  }
  get catName() {
    return this.registerForm.get('catName');
  }
  get description() {
    return this.registerForm.get('description');
  }
  get position() {
    return this.registerForm.get('position');
  }
  get catImage() {
    return this.registerForm.get('catImage');
  }
  get status() {
    return this.registerForm.get('status');
  }

  ngOnInit(): void {
  }

  onSubmitHandler() {
    var result=this.dataService.editCategory(this.registerForm.value);
    this.message=result?"Category Added":"Add Failed";
    if(result){
      this.registerForm.reset();
    }
  }
}
