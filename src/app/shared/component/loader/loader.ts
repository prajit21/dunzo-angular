import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.html",
  styleUrls: ["./loader.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Loader {
  public show: boolean = true;

  constructor() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
