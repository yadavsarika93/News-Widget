import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EconomistComponent } from './economist/economist.component';
import { JerusalemComponent } from './jerusalem/jerusalem.component';
import { CnnComponent } from './cnn/cnn.component';
import { IgnComponent } from './ign/ign.component';
import { EspnComponent } from './espn/espn.component';
import { HackerComponent } from './hacker/hacker.component';
import { DailymailComponent } from './dailymail/dailymail.component';
import { BuzzfeedComponent } from './buzzfeed/buzzfeed.component';
import { AssociatepressComponent } from './associatepress/associatepress.component';

import { NavComponent } from './nav/nav.component';
import { FoxComponent } from './fox/fox.component';

import { FormsModule }   from '@angular/forms';
import { NewFilterPipe } from './new-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EconomistComponent,
    JerusalemComponent,
    CnnComponent,
    IgnComponent,
    EspnComponent,
    HackerComponent,
    DailymailComponent,
    BuzzfeedComponent,
    AssociatepressComponent,
   
    NavComponent,
    FoxComponent,
    NewFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
