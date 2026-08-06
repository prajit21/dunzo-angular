import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-default-toast",
  templateUrl: "./default-toast.html",
  styleUrls: ["./default-toast.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class DefaultToast {
  public default: boolean = true;

  close() {
    this.default = false;
  }
}
