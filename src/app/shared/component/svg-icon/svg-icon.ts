import {
  Component,
  inject,
  input,
  ChangeDetectionStrategy,
} from "@angular/core";

import { LayoutService } from "../../services/layout.service";

@Component({
  selector: "app-svg-icon",
  templateUrl: "./svg-icon.html",
  styleUrls: ["./svg-icon.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class SvgIcon {
  layoutService = inject(LayoutService);

  public readonly icon = input<string>();

  getSvgType() {
    return (
      document
        .getElementsByClassName("sidebar-wrapper")[0]
        .getAttribute("icon") == "fill-svg"
    );
  }
}
