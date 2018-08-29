import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login();
  failedMsg: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.userService.login(this.model).subscribe(result=>{
      if(result.success) {
        // 或者是this.router.navagate("Users");
        this.router.navigateByUrl('/users');
      } else {
        console.info(result.errorMsg);
        this.failedMsg = result.errorMsg;
      }
    });
  }

}
