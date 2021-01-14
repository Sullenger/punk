// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2020
// ; Description: General Website. Calls Punk API.
// ; Users can filter and search.
// ;===========================================

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class APICallService {
  constructor(private http: HttpClient) {}

  // Delete
  // callMaxAPI() {
  //   return this.http.get("https://api.punkapi.com/v2/beers?per_page=80");
  // }

  // callMaxNext(pgNum) {
  //   return this.http.get(
  //     "https://api.punkapi.com/v2/beers?page=" + pgNum + "&per_page=12"
  //   );
  // }
// end Delete

  callAPI() {
    return this.http.get("https://api.punkapi.com/v2/beers?per_page=12");
  }

  filterGreaterThan() {
    return this.http.get(
      "https://api.punkapi.com/v2/beers?abv_gt=5&per_page=12"
    );
  }

  filterLessThan() {
    return this.http.get(
      "https://api.punkapi.com/v2/beers?abv_lt=5&per_page=12"
    );
  }

  searchByName(searchString) {
    return this.http.get(
      "https://api.punkapi.com/v2/beers?beer_name=" +
        searchString +
        "&per_page=12"
    );
  }

  callNextPage(pgNum, filter) {
    if (filter.name) {
      return this.http.get(
        "https://api.punkapi.com/v2/beers?beer_name=" +
          filter.name +
          "&per_page=12&page=" +
          pgNum
      );
    } else if (filter.alcoholContent) {
      if (filter.alcoholContent == "Greater") {
        return this.http.get(
          "https://api.punkapi.com/v2/beers?abv_gt=5&per_page=12&page=" + pgNum
        );
      } else {
        return this.http.get(
          "https://api.punkapi.com/v2/beers?abv_lt=5&per_page=12&page=" + pgNum
        );
      }
    } else {
      return this.http.get(
        "https://api.punkapi.com/v2/beers?page=" + pgNum + "&per_page=12"
      );
    }
  }
}
