import { Component } from "@angular/core";

import {
  VariationRadiopayment,
  VariationsWebdesign,
  variationsIcons,
} from "../../../../../shared/data/forms/form-controls/mega-options";

@Component({
  selector: "app-variation-radio",
  templateUrl: "./variation-radio.html",
  styleUrls: ["./variation-radio.scss"],
  imports: [],
})
export class VariationRadio {
  public paymentData = VariationRadiopayment;
  public webdesignData = VariationsWebdesign;
  public iconsData = variationsIcons;
}
