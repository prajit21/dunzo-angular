import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FormDetails } from "./form-details/form-details";

@Component({
  selector: "app-basic-floating-input-control",
  templateUrl: "./basic-floating-input-control.html",
  styleUrls: ["./basic-floating-input-control.scss"],
  imports: [FormsModule, FormDetails],
})
export class BasicFloatingInputControl {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}
