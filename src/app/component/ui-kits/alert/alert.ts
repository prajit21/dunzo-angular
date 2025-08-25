import { Component } from "@angular/core";

import { AdditionalContent } from "./additional-content/additional-content";
import { AlertsIconsTextActions } from "./alerts-icons-text-actions/alerts-icons-text-actions";
import { DismissingDarkAlerts } from "./dismissing-dark-alerts/dismissing-dark-alerts";
import { DismissingLightAlerts } from "./dismissing-light-alerts/dismissing-light-alerts";
import { LeftBorderAlert } from "./left-border-alert/left-border-alert";
import { LinkColorDarkTheme } from "./link-color-dark-theme/link-color-dark-theme";
import { LinkColorLightTheme } from "./link-color-light-theme/link-color-light-theme";
import { LiveAlert } from "./live-alert/live-alert";
import { OutlineDarkLightAlerts } from "./outline-dark-light-alerts/outline-dark-light-alerts";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.html",
  styleUrls: ["./alert.scss"],
  imports: [
    LinkColorDarkTheme,
    LinkColorLightTheme,
    OutlineDarkLightAlerts,
    AlertsIconsTextActions,
    DismissingDarkAlerts,
    DismissingLightAlerts,
    LiveAlert,
    LeftBorderAlert,
    AdditionalContent,
  ],
})
export class Alert {}
