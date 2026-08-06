import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-unique-toast",
  templateUrl: "./unique-toast.html",
  styleUrls: ["./unique-toast.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class UniqueToast {
  public Unique: boolean = true;

  close() {
    this.Unique = false;
  }
}
