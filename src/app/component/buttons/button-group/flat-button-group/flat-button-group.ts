import { Component } from "@angular/core";

import { commongroupButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-flat-button-group",
  templateUrl: "./flat-button-group.html",
  styleUrls: ["./flat-button-group.scss"],
  imports: [],
})
export class FlatButtonGroup {
  public FlatgroupData = commongroupButton;
}
