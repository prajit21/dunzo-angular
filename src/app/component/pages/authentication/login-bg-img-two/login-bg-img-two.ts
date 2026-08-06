import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonLoginForm } from "../common-login-form/common-login-form";

@Component({
  selector: "app-login-bg-img-two",
  templateUrl: "./login-bg-img-two.html",
  styleUrls: ["./login-bg-img-two.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, CommonLoginForm],
})
export class LoginBgImgTwo {}
