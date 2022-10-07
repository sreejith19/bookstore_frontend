import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl="https://localhost:44377/api/";
  constructor(private http:HttpClient) { }
  getAllCategories():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}category`);
  }
  getCategoryById(catId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}category/${catId}`);
  }
  getAllBooks():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}book`);
  }
  getBooksById(bookId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}book/get/${bookId}`);
  }
  getBooksByIsbn(isbn:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}book/isbn/?value=${isbn}`);
  }
  getBooksByAuthor(author:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}book/author/?value=${author}`);
  }
  getBooksByName(name:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}book/get?value=${name}`);
  }
  getBooksByCategory(catId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}book/category/${catId}`);
  }
  getCoupons():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}coupon`);
  }
  getCouponById(couponId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}coupon/${couponId}`);
  }
  getCouponByCode(code:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}coupon/get/${code}`);
  }
  getAllUsers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}user`);
  }
  getUserById(userId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}user/${userId}`);
  }
  getUserByName(name:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}user/get/${name}`);
  }
  getUserByEmail(email:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}user/email/?value=${email}`);
  }
  getUserIdByName(name:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}user/userid/${name}`);
  }
  getAllOrders():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}order`);
  }
  getOrderById(orderId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}order/get/${orderId}`);
  }
  getOrderByUserId(userId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}order/user/${userId}`);
  }
  getCartByUserId(userId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}cart/${userId}`);
  }
  getWishListByUserId(userId:any):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}wishlist/${userId}`);
  }
  addBook(book:any):Boolean{
      var data={
      "bookId": Number.parseInt(book.bookId),
      "catId": Number.parseInt(book.catId),
      "title": book.title,
      "isbn": book.isbn,
      "year": Number.parseInt(book.year),
      "price": Number.parseFloat(book.price),
      "description": book.description,
      "position": book.position,
      "status": 1,
      "image": book.image,
      "author": book.author
  }
  var resp=this.http.post<object>(`${this.baseUrl}/book/add`,data).subscribe((response)=>{
    console.log(response);
    return true;
  },(error)=>{
    console.log(error);
    return false;
  });
  // console.log(resp);
  return true;
  }
  editBook(book:any):Boolean{
    var data={
    "bookId": Number.parseInt(book.bookId),
    "catId": Number.parseInt(book.catId),
    "title": book.title,
    "isbn": book.isbn,
    "year": Number.parseInt(book.year),
    "price": Number.parseFloat(book.price),
    "description": book.description,
    "position": book.position,
    "status": Number.parseInt(book.status),
    "image": book.image,
    "author": book.author
}
var resp=this.http.post<object>(`${this.baseUrl}/book/edit`,data).subscribe((response)=>{
  console.log(response);
  return true;
},(error)=>{
  console.log(error);
  return false;
});
// console.log(resp);
return true;
}
deleteBook(id:any):Boolean{
  
var resp=this.http.post(`${this.baseUrl}/book/delete`,Number.parseInt(id)).subscribe((response)=>{
console.log(response);
return true;
},(error)=>{
console.log(error);
return false;
});
// console.log(resp)
return true;
}


addCategory(category:any):Boolean{
  var data={
    "catId": category.catId,
    "catName": category.catName,
    "description": category.description,
    "catImage": category.catImage,
    "status": 1,
    "position": category.position,
    "createdAt": "2022-09-27T09:54:28"
}
var resp=this.http.post<object>(`${this.baseUrl}/category/add`,data).subscribe((response)=>{
console.log(response);
return true;
},(error)=>{
console.log(error);
return false;
});
// console.log(resp);
return true;
}
editCategory(category:any):Boolean{
  var data={
    "catId": category.catId,
    "catName": category.catName,
    "description": category.description,
    "catImage": category.catImage,
    "status": category.status,
    "position": category.position,
    "createdAt": "2022-09-27T09:54:28"
}
var resp=this.http.post<object>(`${this.baseUrl}/category/edit`,data).subscribe((response)=>{
console.log(response);
return true;
},(error)=>{
console.log(error);
return false;
});
// console.log(resp);
return true;
}
deleteCategory(id:any):Boolean{

var resp=this.http.post(`${this.baseUrl}/category/delete`,Number.parseInt(id)).subscribe((response)=>{
console.log(response);
return true;
},(error)=>{
console.log(error);
return false;
});
// console.log(resp)
return true;
}

getCart(id:any):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/cart/`+id);
}
addToCart(id:any,book:any):Observable<any>{
  console.log('add');
  
  return this.http.get<any>(`${this.baseUrl}/cart/add/`+id+'/'+book);
}
removeFromCart(id:any,book:any):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/cart/delete/`+id+'/'+book);
}

getWishList(id:any):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/WishList/`+id);
}
addToWishList(id:any,book:any):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/WishList/add/`+id+'/'+book);
}
removeFromWishList(id:any,book:any):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/WishList/delete/`+id+'/'+book);
}
}

