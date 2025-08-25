import { Component } from "@angular/core";

import { BordersWithIcons } from "./borders-with-icons/borders-with-icons";
import { CustomSwitch } from "./custom-switch/custom-switch";
import { DisabledOutlineSwitch } from "./disabled-outline-switch/disabled-outline-switch";
import { IconsSwitch } from "./icons-switch/icons-switch";
import { SwitchIcons } from "./switch-icons/switch-icons";
import { SwitchSizing } from "./switch-sizing/switch-sizing";
import { UncheckedSwitch } from "./unchecked-switch/unchecked-switch";
import { VariationSwitches } from "./variation-switches/variation-switches";

@Component({
  selector: "app-switch",
  templateUrl: "./switch.html",
  styleUrls: ["./switch.scss"],
  imports: [
    CustomSwitch,
    IconsSwitch,
    UncheckedSwitch,
    BordersWithIcons,
    DisabledOutlineSwitch,
    VariationSwitches,
    SwitchSizing,
    SwitchIcons,
  ],
})
export class Switch {}
