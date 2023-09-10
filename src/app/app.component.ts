import { Component, OnInit } from '@angular/core';
import AOS from "aos";

//const AOS = require('aos');
//import * as AOS from 'aos';
//import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-aos';
  ngOnInit() {

    AOS.init();
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.

  }

}
