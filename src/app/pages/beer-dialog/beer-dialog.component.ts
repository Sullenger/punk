// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2020
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { Router } from "@angular/router";
//import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { BeerResultsComponent } from '../beer-results/beer-results.component';

@Component({
  selector: 'app-beer-dialog',
  templateUrl: './beer-dialog.component.html',
  styleUrls: ['./beer-dialog.component.css']
})
export class BeerDialogComponent implements OnInit {

  panelOpenState = false;

  constructor(
    private dialogRef: MatDialogRef<BeerResultsComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: object
  ) { }

  //@Input() public beerResult;

  ngOnInit() {
    console.log(this.data)
  }

}
