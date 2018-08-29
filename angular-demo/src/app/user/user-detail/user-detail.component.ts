import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private location: Location,private userService: UserService) { }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.queryDetail(id).subscribe(user => this.user = user);
  }

  back(): void{
    this.location.back();
  }

}
