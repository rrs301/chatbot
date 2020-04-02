import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-launch-page',
  templateUrl: './app-launch-page.component.html',
  styleUrls: ['./app-launch-page.component.css']
})
export class AppLaunchPageComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {

  }

  LetsChat()
  {
    this.router.navigate(['chatbox']);
  }

}
