import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-forms-validation",
  templateUrl: "./forms-validation.html",
  styleUrls: ["./forms-validation.scss"],
  imports: [FormsModule, NgClass],
})
export class FormsValidation {
  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }
}
