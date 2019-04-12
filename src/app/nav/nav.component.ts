import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  apptitle:string="News Headlines";
  mArticles:Array<any>;
  title:string='';

  constructor() { }

  ngOnInit() {
  }



}
