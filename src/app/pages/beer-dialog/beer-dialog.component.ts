// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2021
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { BeerResultsComponent } from '../beer-results/beer-results.component';

@Component({
  selector: 'app-beer-dialog',
  templateUrl: './beer-dialog.component.html',
  styleUrls: ['./beer-dialog.component.css']
})
export class BeerDialogComponent implements OnInit {

  panelOpenState = false;
  @Input() public brew;

  constructor(
    private dialogRef: MatDialogRef<BeerResultsComponent>,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.brew)
  }

}
