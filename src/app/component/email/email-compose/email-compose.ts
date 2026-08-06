import { Component, ChangeDetectionStrategy } from "@angular/core";

import { EmailApp } from "../email-app/email-app";

@Component({
  selector: "app-email-compose",
  templateUrl: "./email-compose.html",
  styleUrls: ["./email-compose.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [EmailApp],
})
export class EmailCompose {}
