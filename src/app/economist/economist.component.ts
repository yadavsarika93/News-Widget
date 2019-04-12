import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-economist',
  templateUrl: './economist.component.html',
  styleUrls: ['./economist.component.css']
})
export class EconomistComponent implements OnInit {

  info :object;
  
  
  constructor(private articles: DataService) { }

  ngOnInit() {

    this.articles.getinfo().subscribe(articles =>{
      this.info =articles ;
     
      console.log(this.info);
      
     
    })
    
  }




}
