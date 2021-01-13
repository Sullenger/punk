import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-age-dialog",
  templateUrl: "./age-dialog.component.html",
  styleUrls: ["./age-dialog.component.css"],
})
export class AgeDialogComponent implements OnInit {
  underAge: boolean;

  constructor() {}

  ngOnInit(): void {}

  not21() {
    this.underAge = true;
  }
}
