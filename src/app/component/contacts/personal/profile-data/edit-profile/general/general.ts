import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import * as data from "../../../../../../shared/data/contacts/all-contact";

@Component({
  selector: "app-general",
  templateUrl: "./general.html",
  styleUrls: ["./general.scss"],
  imports: [FormsModule],
})
export class General {
  readonly lastData = input<data.lastDataList>();
}
