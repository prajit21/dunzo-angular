import { Component } from "@angular/core";

import {
  BorderedRadio,
  IconsRadio,
  FilledRadio,
} from "../../../../,./../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-custom-radio",
  templateUrl: "./custom-radio.html",
  styleUrls: ["./custom-radio.scss"],
  imports: [],
})
export class CustomRadio {
  public borderData = BorderedRadio;
  public iconData = IconsRadio;
  public filledData = FilledRadio;
}
