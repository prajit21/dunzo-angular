import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonRegisterForm } from "../common-register-form/common-register-form";

@Component({
  selector: "app-register-simple",
  templateUrl: "./register-simple.html",
  styleUrls: ["./register-simple.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, CommonRegisterForm],
})
export class RegisterSimple {}
