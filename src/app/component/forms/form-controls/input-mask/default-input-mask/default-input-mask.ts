import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-default-input-mask",
  templateUrl: "./default-input-mask.html",
  styleUrls: ["./default-input-mask.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class DefaultInputMask {}
