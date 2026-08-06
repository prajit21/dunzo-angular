import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-horizontal-accordion",
  templateUrl: "./horizontal-accordion.html",
  styleUrls: ["./horizontal-accordion.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class HorizontalAccordion {
  public togglecollpese = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }
}
