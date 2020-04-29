import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>{{title}}</h1>   
  <ul class="nav">
      <li [routerLink]="['/']">Home</li>
      <li [routerLink]="['/account']">Account</li>
  </ul>
  <article>
      <h2>{{blogTitle}}</h2>
      <img [src]="blogImg" width=200/>
      <p>{{blogText}}</p>
  </article>
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
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  title: string = 'Home';
  blogTitle: string = 'Blog Title';
  blogText: string = 'Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text Blog Text';
  blogImg = './assets/images/blogimg.jpg';
}
