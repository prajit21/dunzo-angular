import { Component } from "@angular/core";

import { BasicFloatingInputControl } from "./basic-floating-input-control/basic-floating-input-control";
import { BasicForm } from "./basic-form/basic-form";
import { BasicHtmlInputControl } from "./basic-html-input-control/basic-html-input-control";
import { EdgesInputStyle } from "./edges-input-style/edges-input-style";
import { FileInput } from "./file-input/file-input";
import { FlatInputStyle } from "./flat-input-style/flat-input-style";
import { FloatingForm } from "./floating-form/floating-form";
import { FormControlSizing } from "./form-control-sizing/form-control-sizing";
import { RaiseInputStyle } from "./raise-input-style/raise-input-style";
import { SelectSizing } from "./select-sizing/select-sizing";

@Component({
  selector: "app-base-inputs",
  templateUrl: "./base-inputs.html",
  styleUrls: ["./base-inputs.scss"],
  imports: [
    BasicForm,
    FloatingForm,
    SelectSizing,
    FormControlSizing,
    FileInput,
    FlatInputStyle,
    BasicHtmlInputControl,
    BasicFloatingInputControl,
    EdgesInputStyle,
    RaiseInputStyle,
  ],
})
export class BaseInputs {}
