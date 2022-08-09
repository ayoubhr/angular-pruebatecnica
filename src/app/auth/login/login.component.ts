import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  }
  
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }

  loginUser(user: User) {
    if (this.loginForm.valid) {
      this.authService.login(user);
    }
  }

}
