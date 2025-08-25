import { Component } from "@angular/core";

import { AjaxRequestMovie } from "./ajax-request-movie/ajax-request-movie";
import { AutoCloseTimer } from "./auto-close-timer/auto-close-timer";
import { BasicExample } from "./basic-example/basic-example";
import { DangerAlert } from "./danger-alert/danger-alert";
import { InfoAlert } from "./info-alert/info-alert";
import { PikachuAlert } from "./pikachu-alert/pikachu-alert";
import { QuestionsAlert } from "./questions-alert/questions-alert";
import { SuccessAlert } from "./success-alert/success-alert";
import { TitleTextAlert } from "./title-text-alert/title-text-alert";
import { UsernameAlert } from "./username-alert/username-alert";
import { WarningAlert } from "./warning-alert/warning-alert";
import { WarningMode } from "./warning-mode/warning-mode";

@Component({
  selector: "app-sweetalert2",
  templateUrl: "./sweetalert2.html",
  styleUrls: ["./sweetalert2.scss"],
  imports: [
    BasicExample,
    TitleTextAlert,
    InfoAlert,
    WarningAlert,
    PikachuAlert,
    QuestionsAlert,
    UsernameAlert,
    SuccessAlert,
    DangerAlert,
    WarningMode,
    AutoCloseTimer,
    AjaxRequestMovie,
  ],
})
export class Sweetalert2 {}
