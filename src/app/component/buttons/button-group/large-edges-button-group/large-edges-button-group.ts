import { Component } from "@angular/core";

import { commongroupButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-large-edges-button-group",
  templateUrl: "./large-edges-button-group.html",
  styleUrls: ["./large-edges-button-group.scss"],
  imports: [],
})
export class LargeEdgesButtonGroup {
  public largedgebuttongroup = commongroupButton;
}
