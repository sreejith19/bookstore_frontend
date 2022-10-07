import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { BookComponent } from './components/book/book.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DeletebookComponent } from './components/books/deletebook/deletebook.component';
import { EditbookComponent } from './components/books/editbook/editbook.component';
import { AddbookComponent } from './components/books/addbook/addbook.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { AddcategoryComponent } from './components/categories/addcategory/addcategory.component';
import { EditcategoryComponent } from './components/categories/editcategory/editcategory.component';
import { DeletecategoryComponent } from './components/categories/deletecategory/deletecategory.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsComponent } from './components/products/products.component';
import { TitlesearchComponent } from './components/search/titlesearch/titlesearch.component';
import { IsbnsearchComponent } from './components/search/isbnsearch/isbnsearch.component';
import { AuthorsearchComponent } from './components/search/authorsearch/authorsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    HomepageComponent,
    LoginpageComponent,
    CategoryComponent,
    BookComponent,
    BookdetailComponent,
    SearchpageComponent,
    SearchComponent,
    RegisterComponent,
    AdminloginComponent,
    DeletebookComponent,
    EditbookComponent,
    AddbookComponent,
    BookPageComponent,
    AdminPageComponent,
    CategoryPageComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    DeletecategoryComponent,
    CartPageComponent,
    WishlistPageComponent,
    CartComponent,
    WishlistComponent,
    ProductPageComponent,
    ProductsComponent,
    TitlesearchComponent,
    IsbnsearchComponent,
    AuthorsearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
