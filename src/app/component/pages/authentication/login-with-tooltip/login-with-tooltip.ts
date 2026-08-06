import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonLoginForm } from "../common-login-form/common-login-form";

@Component({
  selector: "app-login-with-tooltip",
  templateUrl: "./login-with-tooltip.html",
  styleUrls: ["./login-with-tooltip.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, CommonLoginForm],
})
export class LoginWithTooltip {}
