import { Component } from "@angular/core";

import { FullscreenBelowLgModal } from "./fullscreen-below-lg-modal/fullscreen-below-lg-modal";
import { FullscreenBelowMdModal } from "./fullscreen-below-md-modal/fullscreen-below-md-modal";
import { FullscreenBelowSmModal } from "./fullscreen-below-sm-modal/fullscreen-below-sm-modal";
import { FullscreenBelowXlModal } from "./fullscreen-below-xl-modal/fullscreen-below-xl-modal";
import { FullscreenBelowXxlModal } from "./fullscreen-below-xxl-modal/fullscreen-below-xxl-modal";
import { FullscreenUiModal } from "./fullscreen-ui-modal/fullscreen-ui-modal";

@Component({
  selector: "app-fullscreen-modal",
  templateUrl: "./fullscreen-modal.html",
  styleUrls: ["./fullscreen-modal.scss"],
  imports: [
    FullscreenUiModal,
    FullscreenBelowSmModal,
    FullscreenBelowLgModal,
    FullscreenBelowMdModal,
    FullscreenBelowXlModal,
    FullscreenBelowXxlModal,
  ],
})
export class FullscreenModal {}
