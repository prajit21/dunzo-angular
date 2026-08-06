import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-without-borders-style",
  templateUrl: "./without-borders-style.html",
  styleUrls: ["./without-borders-style.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class WithoutBordersStyle {}
