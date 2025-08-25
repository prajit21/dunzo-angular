import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { ProductDataTable } from "../product-data-table/product-data-table";

@Component({
  selector: "app-top-section",
  templateUrl: "./top-section.html",
  styleUrls: ["./top-section.scss"],
  imports: [Feathericon, NgClass, RouterLink, FormsModule, ProductDataTable],
})
export class TopSection {
  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }
}
