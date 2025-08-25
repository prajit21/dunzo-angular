import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-tooltip-validation",
  templateUrl: "./tooltip-validation.html",
  styleUrls: ["./tooltip-validation.scss"],
  imports: [FormsModule, NgClass],
})
export class TooltipValidation {
  public validate = false;
  public tooltipValidation = false;

  public submit() {
    this.validate = !this.validate;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
}
