import { Component } from "@angular/core";

@Component({
  selector: "app-horizontal-accordion",
  templateUrl: "./horizontal-accordion.html",
  styleUrls: ["./horizontal-accordion.scss"],
  imports: [],
})
export class HorizontalAccordion {
  public togglecollpese = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }
}
