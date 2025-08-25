import { Component } from "@angular/core";

import { avatarSize } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-sizes",
  templateUrl: "./sizes.html",
  styleUrls: ["./sizes.scss"],
  imports: [],
})
export class Sizes {
  public SizeData = avatarSize;
}
