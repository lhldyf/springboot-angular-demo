import { Component, OnInit } from '@angular/core';
import { Table } from '../../table';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Pagination } from '../../pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, Table<User> {

  userPage: Pagination<User>;
  self: Table<User>;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchPage(0, 10);
    this.self = this;
  }

  fetchPage(pageNumber: number, pageSize: number): Observable<Pagination<User>> {
    let observable = this.userService.queryPage(pageNumber, pageSize);
    observable.subscribe(userPage => this.userPage = userPage);
    return observable;
  }

  goToDetail(user: User): void{

  }

}
