import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-common-login-form",
  templateUrl: "./common-login-form.html",
  styleUrls: ["./common-login-form.scss"],
  imports: [FormsModule, RouterLink, Feathericon],
})
export class CommonLoginForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
