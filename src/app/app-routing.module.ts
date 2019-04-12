import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EconomistComponent } from './economist/economist.component';
import { JerusalemComponent } from './jerusalem/jerusalem.component';
import { CnnComponent } from './cnn/cnn.component';
import { IgnComponent } from './ign/ign.component';
import { EspnComponent } from './espn/espn.component';
import { FoxComponent } from './fox/fox.component';
import { HackerComponent } from './hacker/hacker.component';
import { DailymailComponent } from './dailymail/dailymail.component';
import { BuzzfeedComponent } from './buzzfeed/buzzfeed.component';
import { AssociatepressComponent } from './associatepress/associatepress.component';


const routes: Routes = [
  { path :'', component:EconomistComponent},
  { path :'jerusalem',component:JerusalemComponent},
  { path :'cnn', component:CnnComponent},
  { path :'ign', component:IgnComponent},
  { path :'espn', component:EspnComponent},
  { path :'fox', component:FoxComponent},
  { path :'hacker', component:HackerComponent},
  { path :'dailymail', component:DailymailComponent},
  { path :'buzzfeed', component:BuzzfeedComponent},
  { path :'associatepress', component:AssociatepressComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
