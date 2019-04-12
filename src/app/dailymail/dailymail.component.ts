import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dailymail',
  templateUrl: './dailymail.component.html',
  styleUrls: ['./dailymail.component.css']
})
export class DailymailComponent implements OnInit {

  info :object;
  
  
  constructor(private articles: DataService) { }

  ngOnInit() {

    this.articles.getinfo().subscribe(articles =>{
      this.info =articles ;
     
      console.log(this.info);
    })
    
  }

}
