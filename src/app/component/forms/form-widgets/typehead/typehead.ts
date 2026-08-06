import { Component, ChangeDetectionStrategy } from "@angular/core";

import { FormattedResults } from "./formatted-results/formatted-results";
import { GlobalConfiguration } from "./global-configuration/global-configuration";
import { OpenFocusTyhead } from "./open-focus-tyhead/open-focus-tyhead";
import { PerventManualEntry } from "./pervent-manual-entry/pervent-manual-entry";
import { SelectOnExact } from "./select-on-exact/select-on-exact";
import { SimpleTypehead } from "./simple-typehead/simple-typehead";
import { TemplateForResults } from "./template-for-results/template-for-results";
import { WikipediaSearch } from "./wikipedia-search/wikipedia-search";

@Component({
  selector: "app-typehead",
  templateUrl: "./typehead.html",
  styleUrls: ["./typehead.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    SimpleTypehead,
    WikipediaSearch,
    OpenFocusTyhead,
    FormattedResults,
    SelectOnExact,
    TemplateForResults,
    PerventManualEntry,
    GlobalConfiguration,
  ],
})
export class Typehead {}
