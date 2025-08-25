import { NgClass } from "@angular/common";
import { Component, output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-selling-price",
  templateUrl: "./selling-price.html",
  styleUrls: ["./selling-price.scss"],
  imports: [FormsModule, ReactiveFormsModule, NgClass],
})
export class SellingPrice {
  readonly activeSteps = output<number>();

  public activeStep: number = 4;
  public validate: boolean;

  myForm = new FormGroup({
    initalcost: new FormControl("", Validators.required),
    sellingPrice: new FormControl("", Validators.required),
    currency: new FormControl("", Validators.required),
    Productstocks: new FormControl("", Validators.required),
  });

  get initalcost() {
    return this.myForm.get("initalcost");
  }

  get sellingPrice() {
    return this.myForm.get("sellingPrice");
  }

  get currency() {
    return this.myForm.get("currency");
  }

  get Productstocks() {
    return this.myForm.get("Productstocks");
  }

  next(_myForm: FormGroup) {
    this.validate = true;
    if (this.myForm.valid) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
    }
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
