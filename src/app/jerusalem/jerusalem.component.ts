import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-jerusalem',
  templateUrl: './jerusalem.component.html',
  styleUrls: ['./jerusalem.component.css']
})
export class JerusalemComponent implements OnInit {

  info :object;
  
  
  constructor(private articles: DataService) { }

  ngOnInit() {

    this.articles.getinfo().subscribe(articles =>{
      this.info =articles ;
     
      console.log(this.info);
    })
    
  }

}
