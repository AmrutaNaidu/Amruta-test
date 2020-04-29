import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
  <h1>{{title}}</h1>  
  <ul class="nav">
    <li [routerLink]="['/']">Home</li>
    <li [routerLink]="['/account']">Account</li>
  </ul>

  <div class="firstview" *ngIf="flag">
  <form #theForm="ngForm">  
    <label for="username">Username: </label>
    <input type="text" name="username" required [(ngModel)]="username" #theUsername="ngModel" />
    <span [hidden]="theUsername.valid || theUsername.untouched">Please enter Username</span><br/>
    <label  for="password">Password: </label>
    <input type="password" name="password" required [(ngModel)]="password" #thePassword="ngModel" />
    <span [hidden]="thePassword.valid || thePassword.untouched">Please enter Password</span><br/>
    <button [disabled]="theForm.invalid" (click)="submit()">Log In</button>
    </form>
  </div>

  <div class="secondview" *ngIf="!flag">
    <p>{{username}} has logged in!</p>
    <button (click)="logout()">Log-Out</button>
  </div>
  `,
  styles: [`
    .nav {
      list-style-type: none;
    }
    .nav li {
      display: inline-block;
      margin: 5px;
      color: white;
      background: navy;
      padding: 10px;
    }
  `]
})
export class AccountComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  title: string = 'Account';
  password = ""
  username = ""
  flag: boolean = true;

  submit() {
    username: this.username;
    password: this.password;
    this.flag = !this.flag;
  }

  logout() {
    this.flag = !this.flag;
    this.username = '';
    this.password = '';
  }
}
