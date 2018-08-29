import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from './user';
import { Pagination } from '../pagination';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Login } from './login';
import { Result } from '../result';

const userPageUrl = "http://localhost:8080/api/person";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  queryPage(pageNumber: number, pageSize: number): Observable<Pagination<User>> {

    // HttpParams每次set都会返回新对象，只能这样连写，分开写会无效的
    let params = new HttpParams().set('size', `${pageSize}`).set('page', `${pageNumber}`);

    // { params } 是 { params: params } 的缩写，简写时变量名务必使用params
    return this.http.get<Pagination<User>>(userPageUrl, { params });
  }

  queryDetail(id: number): Observable<User> {
    return this.http.get<User>(`${userPageUrl}/${id}`);
  }

  queryUserInfoList(): Observable<Result> {
    return this.http.get<Result> ('http://localhost:8081/getUserInfoList');
  }

  login(loginForm: Login): Observable<Result> {
    return this.http.post<Result>('http://localhost:8081/login', loginForm);
  }
}
