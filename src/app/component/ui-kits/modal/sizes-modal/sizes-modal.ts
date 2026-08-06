import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ExtraLargeModal } from "./extra-large-modal/extra-large-modal";
import { FullScreenModal } from "./full-screen-modal/full-screen-modal";
import { LargeModal } from "./large-modal/large-modal";
import { SmallModal } from "./small-modal/small-modal";

@Component({
  selector: "app-sizes-modal",
  templateUrl: "./sizes-modal.html",
  styleUrls: ["./sizes-modal.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FullScreenModal, ExtraLargeModal, LargeModal, SmallModal],
})
export class SizesModal {}
