import { Component } from "@angular/core";

import { Listradios } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-list-radios",
  templateUrl: "./list-radios.html",
  styleUrls: ["./list-radios.scss"],
  imports: [],
})
export class ListRadios {
  public listradiosData = Listradios;
}
