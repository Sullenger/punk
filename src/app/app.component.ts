// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2020
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { Component } from '@angular/core';
import { APICallService } from './apicall.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rw-Punk-Challenge';

  beerList: any;

  constructor(private api:APICallService){

  }

  ngOnInit(){  }
}
