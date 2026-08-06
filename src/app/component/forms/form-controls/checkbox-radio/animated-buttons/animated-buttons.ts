import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  soicaMidia,
  paymentData,
} from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-animated-buttons",
  templateUrl: "./animated-buttons.html",
  styleUrls: ["./animated-buttons.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class AnimatedButtons {
  public SoicalmidiaData = soicaMidia;
  public payment = paymentData;
}
