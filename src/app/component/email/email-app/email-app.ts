import { Component, ChangeDetectionStrategy } from "@angular/core";

import { EmailSidebar } from "./email-sidebar/email-sidebar";

@Component({
  selector: "app-email-app",
  templateUrl: "./email-app.html",
  styleUrls: ["./email-app.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [EmailSidebar],
})
export class EmailApp {}
