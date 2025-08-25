import { Component } from "@angular/core";

import { OpenModalDunzo } from "./open-modal-dunzo/open-modal-dunzo";
import { ScorllingContent } from "./scorlling-content/scorlling-content";
import { Simple } from "./simple/simple";
import { TooltipsPopovers } from "./tooltips-popovers/tooltips-popovers";

@Component({
  selector: "app-basic-modal",
  templateUrl: "./basic-modal.html",
  styleUrls: ["./basic-modal.scss"],
  imports: [Simple, ScorllingContent, TooltipsPopovers, OpenModalDunzo],
})
export class BasicModal {}
