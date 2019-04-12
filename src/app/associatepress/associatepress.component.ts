import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-associatepress',
  templateUrl: './associatepress.component.html',
  styleUrls: ['./associatepress.component.css']
})
export class AssociatepressComponent implements OnInit {

  info :object;
  
  
  constructor(private articles: DataService) { }

  ngOnInit()
   {

    this.articles.getinfo().subscribe(data =>{
      this.info =data;
     
      //console.log("Inside comoponent" +this.info);
    })
  }

}
