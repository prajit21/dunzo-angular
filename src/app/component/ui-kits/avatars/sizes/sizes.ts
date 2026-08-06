import { Component, ChangeDetectionStrategy } from "@angular/core";

import { avatarSize } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-sizes",
  templateUrl: "./sizes.html",
  styleUrls: ["./sizes.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Sizes {
  public SizeData = avatarSize;
}
