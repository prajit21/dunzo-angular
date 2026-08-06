import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ContactSidemenu } from "./contact-sidemenu/contact-sidemenu";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.html",
  styleUrls: ["./contacts.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ContactSidemenu],
})
export class Contacts {}
