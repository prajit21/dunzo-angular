import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonLoginForm } from "../common-login-form/common-login-form";

@Component({
  selector: "app-login-with-bg-img",
  templateUrl: "./login-with-bg-img.html",
  styleUrls: ["./login-with-bg-img.scss"],
  imports: [RouterLink, CommonLoginForm],
})
export class LoginWithBgImg {}
