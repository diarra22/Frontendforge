import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userAuthenticated: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserAuthenticated();
  }

  public getUserAuthenticated(){
    this.userService.getUserAuthenticated().subscribe(user => this.userAuthenticated = user);
  }

}
