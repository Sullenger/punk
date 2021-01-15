// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2020
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CookieService } from "ngx-cookie-service";
// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { BeerResultsComponent } from "./pages/beer-results/beer-results.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BeerDialogComponent } from "./pages/beer-dialog/beer-dialog.component";
import { AgeDialogComponent } from "./pages/age-dialog/age-dialog.component";
// End Components
// Angular Material Start
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule, matMenuAnimations } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatTableModule } from "@angular/material/table";

// Angular Material Finish

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeerResultsComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    BeerDialogComponent,
    AgeDialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    // Start Angular Materials
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    // MatSidenavModule
    // MatTabsModule,
    // MatTableModule,
    // End Angular Materials
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [
    // BeerDialogComponent
  ],
})
export class AppModule {}
