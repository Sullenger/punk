// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2020
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AgeDialogComponent } from "../age-dialog/age-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    this.openDialog()
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    const beerDialog = this.dialog.open(AgeDialogComponent, {
      width: "40%",
      height: "40%",
      disableClose: true
    });
  }
}
