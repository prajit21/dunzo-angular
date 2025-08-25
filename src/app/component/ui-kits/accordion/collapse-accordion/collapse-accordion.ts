import { Component } from "@angular/core";

@Component({
  selector: "app-collapse-accordion",
  templateUrl: "./collapse-accordion.html",
  styleUrls: ["./collapse-accordion.scss"],
  imports: [],
})
export class CollapseAccordion {
  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }

  open() {
    this.togglecollpese = !this.togglecollpese;
  }
}
