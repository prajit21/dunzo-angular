import { Component } from "@angular/core";

import { BrowserDefaults } from "./browser-defaults/browser-defaults";
import { FormsValidation } from "./forms-validation/forms-validation";
import { TooltipValidation } from "./tooltip-validation/tooltip-validation";

@Component({
  selector: "app-validation-form",
  templateUrl: "./validation-form.html",
  styleUrls: ["./validation-form.scss"],
  imports: [TooltipValidation, BrowserDefaults, FormsValidation],
})
export class ValidationForm {}
