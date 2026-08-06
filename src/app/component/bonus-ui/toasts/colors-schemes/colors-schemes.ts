import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-colors-schemes",
  templateUrl: "./colors-schemes.html",
  styleUrls: ["./colors-schemes.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class ColorsSchemes {
  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }
}
