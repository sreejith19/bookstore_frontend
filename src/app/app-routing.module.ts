import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"login",component:LoginpageComponent},
  {path:"home",component:HomepageComponent},
  {path:"books",component:BookComponent},
  {path:"book/:bookId",component:BookdetailComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
