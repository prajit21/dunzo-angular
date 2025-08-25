import { Component } from "@angular/core";

import { blackqutoesData } from "../../../../shared/data/ui-kits/typogaraphy/typogaraphy";

@Component({
  selector: "app-blockquotes",
  templateUrl: "./blockquotes.html",
  styleUrls: ["./blockquotes.scss"],
  imports: [],
})
export class Blockquotes {
  public blockquote = blackqutoesData;
}
