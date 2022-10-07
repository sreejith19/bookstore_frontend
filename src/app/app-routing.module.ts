import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { BookComponent } from './components/book/book.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"login",component:LoginpageComponent},
  {path:"home",component:HomepageComponent},
  {path:"books",component:BookComponent},
  {path:"book/:bookId",component:BookdetailComponent},
  {path:"register",component:RegisterComponent},
  {path:"login/admin",component:AdminloginComponent},
  {path:"bookPage",component:BookPageComponent},
  {path:"admin",component:AdminPageComponent},
  {path:"categoryPage",component:CategoryPageComponent},
  {path:"cart",component:CartPageComponent},
  {path:"wishlist",component:WishlistPageComponent},
  {path:"products/:catId",component:ProductPageComponent},
  {path:"search",component:SearchpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
