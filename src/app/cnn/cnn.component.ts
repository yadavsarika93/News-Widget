import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cnn',
  templateUrl: './cnn.component.html',
  styleUrls: ['./cnn.component.css']
})
export class CnnComponent implements OnInit {

  info :object;
  
  
  constructor(private articles: DataService) { }

  ngOnInit() {

    this.articles.getinfo().subscribe(articles =>{
      this.info =articles ;
     
      console.log(this.info);
    })
    
  }

}
