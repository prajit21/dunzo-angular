import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonLoginForm } from "../common-login-form/common-login-form";

@Component({
  selector: "app-login-with-validation",
  templateUrl: "./login-with-validation.html",
  styleUrls: ["./login-with-validation.scss"],
  imports: [RouterLink, CommonLoginForm],
})
export class LoginWithValidation {}
