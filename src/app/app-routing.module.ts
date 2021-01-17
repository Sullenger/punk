// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2021
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { BeerResultsComponent } from "./pages/beer-results/beer-results.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "beerList",
    component: BeerResultsComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: "legacy",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
