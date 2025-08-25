import { Component } from "@angular/core";

import { ActiveLists } from "./active-lists/active-lists";
import { ContextualClasses } from "./contextual-classes/contextual-classes";
import { CustomContentLists } from "./custom-content-lists/custom-content-lists";
import { DefaultLists } from "./default-lists/default-lists";
import { DisabledLists } from "./disabled-lists/disabled-lists";
import { FlushLists } from "./flush-lists/flush-lists";
import { HorizontalLists } from "./horizontal-lists/horizontal-lists";
import { JavaScriptBehavior } from "./java-script-behavior/java-script-behavior";
import { ListCheckbox } from "./list-checkbox/list-checkbox";
import { ListNumbers } from "./list-numbers/list-numbers";
import { ListRadios } from "./list-radios/list-radios";
import { NumberBedgeLists } from "./number-bedge-lists/number-bedge-lists";
import { ScrollableLists } from "./scrollable-lists/scrollable-lists";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.html",
  styleUrls: ["./lists.scss"],
  imports: [
    DefaultLists,
    ActiveLists,
    FlushLists,
    ContextualClasses,
    HorizontalLists,
    CustomContentLists,
    ListCheckbox,
    ListRadios,
    ListNumbers,
    JavaScriptBehavior,
    NumberBedgeLists,
    DisabledLists,
    ScrollableLists,
  ],
})
export class Lists {}
