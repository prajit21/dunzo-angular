import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-common-register-form",
  templateUrl: "./common-register-form.html",
  styleUrls: ["./common-register-form.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, Feathericon, RouterLink],
})
export class CommonRegisterForm {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
