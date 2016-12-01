import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {User} from '../user';
import { Token } from '../token';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]  
  
})
export class AuthComponent implements OnInit {
  token: Token;
  user: User = new User();
  isHidden: boolean = true;

  constructor(private AuthService: AuthService) { }

  ngOnInit() {   
  }

  login(username,password){
    //console.log(username, password);
    this.AuthService.login(username, password)
      .subscribe(
        err => console.log("verify error" + err) // TODO: handle error
      );

      //this.isHidden = false;
  }

  onVerifyResult(token: Token) {
    // Assign token
    this.token = token;
  }

  handleTokenError(error: any) {
    //do something
  }
  logout(){
      this.AuthService.logout();
  }
}
