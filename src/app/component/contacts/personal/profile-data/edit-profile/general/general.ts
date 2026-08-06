import { Component, input, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import * as data from "../../../../../../shared/data/contacts/all-contact";

@Component({
  selector: "app-general",
  templateUrl: "./general.html",
  styleUrls: ["./general.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class General {
  readonly lastData = input<data.lastDataList>();
}
