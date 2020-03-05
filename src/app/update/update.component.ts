import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public userAuthenticated: User;

  password: String = "OhMyPass"

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getUserAuthenticated();
  }

  public getUserAuthenticated(){
    this.userService.getUserAuthenticated().subscribe(user => this.userAuthenticated = user);
  }

  updateUserInformation(){
    console.log(this.userAuthenticated.username)
    console.log(this.userAuthenticated.name)
    console.log(this.userAuthenticated.email)
    console.log(this.password)

    this.userService.updateUserInfos(this.userAuthenticated.username, this.userAuthenticated.name,
                                     this.userAuthenticated.email, this.password);
    this.router.navigate(['home'])
  
  }


}
