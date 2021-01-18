// ============================================
// ; Title: RW Punk API Technical Challenge
// ; Author: Jason Sullenger
// ; Date: 11/01/2021
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

  callAPI() {
    return this.http.get("https://api.punkapi.com/v2/beers?per_page=12");
  }

  filterAlcGreater() {
    return this.http.get(
      "https://api.punkapi.com/v2/beers?abv_gt=5&per_page=12"
    );
  }

  filterAlcLess() {
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

  filterBitterness(object) {
    console.log(object);
    if (object.max && object.min) {
      console.log("API Called");
      return this.http.get(
        "https://api.punkapi.com/v2/beers?ibu_lt=" +
          object.max +
          "&ibu_gt=" +
          object.min +
          "&per_page=12"
      );
    }
    if (object.max && !object.min) {
      return this.http.get(
        "https://api.punkapi.com/v2/beers?ibu_lt=" + object.max + "&per_page=12"
      );
    } else {
      return this.http.get(
        "https://api.punkapi.com/v2/beers?" +
          "ibu_gt=" +
          object.min +
          "&per_page=12"
      );
    }
  }
  0;
  callNextPage(pgNum, filter, bittNum) {
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
    } else if (filter.bitterness) {
      if (filter.bitterness.max && filter.bitterness.min) {
        return this.http.get(
          "https://api.punkapi.com/v2/beers?ibu_lt=" +
            filter.bitterness.max +
            "&ibu_gt=" +
            filter.bitterness.min +
            "&per_page=12&page=" +
            pgNum
        );
      }
      if (filter.bitterness.max && !filter.bitterness.min) {
        return this.http.get(
          "https://api.punkapi.com/v2/beers?ibu_lt=" +
            filter.bitterness.max +
            "&per_page=12&page=" +
            pgNum
        );
      } else {
        return this.http.get(
          "https://api.punkapi.com/v2/beers?" +
            "ibu_gt=" +
            filter.bitterness.min +
            "&per_page=12&page=" +
            pgNum
        );
      }
    } else {
      return this.http.get(
        "https://api.punkapi.com/v2/beers?page=" + pgNum + "&per_page=12"
      );
    }
  }
}
