import { Component } from "@angular/core";

import { AdditionalContents } from "../../../../shared/data/ui-kits/alert/alert";

@Component({
  selector: "app-additional-content",
  templateUrl: "./additional-content.html",
  styleUrls: ["./additional-content.scss"],
  imports: [],
})
export class AdditionalContent {
  public additionalData = AdditionalContents;
}
