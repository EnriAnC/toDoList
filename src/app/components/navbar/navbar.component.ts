import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLoggedIn = false;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
      this.authService.currentUser.subscribe(isLoggedin=>{
        if (isLoggedin?.accessToken) this.isLoggedIn = true
      })
  }

  onLogout(){
    this.authService.logout()
  }
}
