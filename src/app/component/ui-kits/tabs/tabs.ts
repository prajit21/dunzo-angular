import { Component } from "@angular/core";

import { BorderTabs } from "./border-tabs/border-tabs";
import { IconsTabs } from "./icons-tabs/icons-tabs";
import { JustifyTabs } from "./justify-tabs/justify-tabs";
import { MaterialStyleLeftTabs } from "./material-style-left-tabs/material-style-left-tabs";
import { MaterialStyleTabs } from "./material-style-tabs/material-style-tabs";
import { PillsTabs } from "./pills-tabs/pills-tabs";
import { SimpleTabs } from "./simple-tabs/simple-tabs";
import { VerticalTabs } from "./vertical-tabs/vertical-tabs";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.html",
  styleUrls: ["./tabs.scss"],
  imports: [
    SimpleTabs,
    IconsTabs,
    VerticalTabs,
    PillsTabs,
    JustifyTabs,
    MaterialStyleLeftTabs,
    MaterialStyleTabs,
    BorderTabs,
  ],
})
export class Tabs {}
