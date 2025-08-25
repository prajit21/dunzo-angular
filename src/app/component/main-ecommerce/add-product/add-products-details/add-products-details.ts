import { NgClass } from "@angular/common";
import { Component, output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";

@Component({
  selector: "app-add-products-details",
  templateUrl: "./add-products-details.html",
  styleUrls: ["./add-products-details.scss"],
  imports: [FormsModule, ReactiveFormsModule, NgClass, AngularEditorModule],
})
export class AddProductsDetails {
  public validate: boolean = false;
  public activeStep: number = 1;
  public htmlContent = "";

  readonly activeSteps = output<number>();

  myForm = new FormGroup({
    productTitle: new FormControl("", Validators.required),
  });

  next(_myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  get productTitle() {
    return this.myForm.get("productTitle");
  }
}
