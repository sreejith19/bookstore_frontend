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
}
