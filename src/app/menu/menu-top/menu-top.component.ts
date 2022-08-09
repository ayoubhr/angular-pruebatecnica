import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  @Input() title!: string;
  logged: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.loginChange$.subscribe({
      next: o => this.logged = o
    })
  }

  kill() {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

}
