import { Component, input } from "@angular/core";

import * as data from "../../../../../../shared/data/contacts/all-contact";

@Component({
  selector: "app-address-content",
  templateUrl: "./address-content.html",
  styleUrls: ["./address-content.scss"],
  imports: [],
})
export class AddressContent {
  public editContact: boolean = true;
  readonly lastData = input<data.lastDataList>();
}
