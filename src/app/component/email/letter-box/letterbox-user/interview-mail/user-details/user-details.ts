import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgxPrintDirective } from "ngx-print";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.html",
  styleUrls: ["./user-details.scss"],
  imports: [NgxPrintDirective, AngularEditorModule, FormsModule],
})
export class UserDetails {
  public isOpen: boolean = false;
  public htmlContent = "";

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
