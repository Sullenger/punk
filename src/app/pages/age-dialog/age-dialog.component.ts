import { Component, OnInit, Input, Inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
// import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-age-dialog",
  templateUrl: "./age-dialog.component.html",
  styleUrls: ["./age-dialog.component.css"],
})
export class AgeDialogComponent implements OnInit {
  underAge: boolean;

  constructor(private cookie: CookieService) {}

  ngOnInit(): void {}

  ageVerified() {
    this.cookie.set("ageVerified", "true");
  }

  not21() {
    this.underAge = true;
  }
}
