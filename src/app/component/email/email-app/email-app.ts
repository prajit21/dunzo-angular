import { Component } from "@angular/core";

import { EmailSidebar } from "./email-sidebar/email-sidebar";

@Component({
  selector: "app-email-app",
  templateUrl: "./email-app.html",
  styleUrls: ["./email-app.scss"],
  imports: [EmailSidebar],
})
export class EmailApp {}
