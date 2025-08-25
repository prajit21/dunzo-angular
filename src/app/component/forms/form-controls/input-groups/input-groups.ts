import { Component } from "@angular/core";

import { BasicInputGroups } from "./basic-input-groups/basic-input-groups";
import { ButtonAddons } from "./button-addons/button-addons";
import { ButtonsDropdowns } from "./buttons-dropdowns/buttons-dropdowns";
import { CustomFileInput } from "./custom-file-input/custom-file-input";
import { CustomForms } from "./custom-forms/custom-forms";
import { InputCheckboxesRadios } from "./input-checkboxes-radios/input-checkboxes-radios";
import { InputSizing } from "./input-sizing/input-sizing";
import { MultipleInputs } from "./multiple-inputs/multiple-inputs";
import { SegmentedButtons } from "./segmented-buttons/segmented-buttons";
import { VariationOfAddons } from "./variation-of-addons/variation-of-addons";

@Component({
  selector: "app-input-groups",
  templateUrl: "./input-groups.html",
  styleUrls: ["./input-groups.scss"],
  imports: [
    ButtonAddons,
    CustomForms,
    CustomFileInput,
    ButtonsDropdowns,
    SegmentedButtons,
    InputCheckboxesRadios,
    InputSizing,
    MultipleInputs,
    BasicInputGroups,
    VariationOfAddons,
  ],
})
export class InputGroups {}
