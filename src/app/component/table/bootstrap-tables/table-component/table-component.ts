import { Component } from "@angular/core";

import { AlertsTable } from "./alerts-table/alerts-table";
import { Badges } from "./badges/badges";
import { CheckboxTable } from "./checkbox-table/checkbox-table";
import { ProgressbarTable } from "./progressbar-table/progressbar-table";
import { RadioButtons } from "./radio-buttons/radio-buttons";
import { SelectTable } from "./select-table/select-table";
import { SwitchTable } from "./switch-table/switch-table";
import { TooltipTriggers } from "./tooltip-triggers/tooltip-triggers";
import { UiTable } from "./ui-table/ui-table";

@Component({
  selector: "app-table-component",
  templateUrl: "./table-component.html",
  styleUrls: ["./table-component.scss"],
  imports: [
    UiTable,
    AlertsTable,
    ProgressbarTable,
    CheckboxTable,
    RadioButtons,
    SelectTable,
    Badges,
    TooltipTriggers,
    SwitchTable,
  ],
})
export class TableComponent {}
