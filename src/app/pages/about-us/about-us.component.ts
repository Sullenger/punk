// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2020
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { Component, OnInit } from "@angular/core";
import { APICallService } from "../../apicall.service";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent implements OnInit {
  beerList: any;
  pageNum: any;

  constructor(private api: APICallService) {}

  ngOnInit() {
    // delete later
    // this.api.callMaxAPI().subscribe((data) => {
    //   this.beerList = data;
    //   console.log(data);
    // });
  }
// Delete Later
  // nextCall(num) {
  //   this.api.callMaxNext(num).subscribe((data) => {
  //     this.beerList = data;
  //   });
  // }

  // next(){
  //   let newPgNum = this.pageNum + 1;
  //   this.nextCall(newPgNum);
  // }
}
