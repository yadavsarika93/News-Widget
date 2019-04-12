import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buzzfeed',
  templateUrl: './buzzfeed.component.html',
  styleUrls: ['./buzzfeed.component.css']
})
export class BuzzfeedComponent implements OnInit {

  info :object;
  
  
  constructor(private articles: DataService) { }

  ngOnInit() {

    this.articles.getinfo().subscribe(articles =>{
      this.info =articles ;
     
      console.log(this.info);
    })
    
  }


}
