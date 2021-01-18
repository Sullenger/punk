// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2021
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  mobile: boolean = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.mobile = null;
    if (window.screen.width < 1025) {
      this.mobile = true;
    }
  }

  navigateHome() {
    this.router.navigate([""]);
  }

  navigateBeerList() {
    this.router.navigate(["./beerList"]);
  }

  navigateContact() {
    this.router.navigate(["./contact-us"]);
  }

  navigateAbout() {
    this.router.navigate(["./about-us"]);
  }
}
