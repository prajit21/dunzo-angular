import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-description-tab",
  templateUrl: "./description-tab.html",
  styleUrls: ["./description-tab.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class DescriptionTab {
  public openTab: string = "febric";

  public tabbed(val: string) {
    this.openTab = val;
  }
}
