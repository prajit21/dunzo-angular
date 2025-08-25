import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonLoginForm } from "../common-login-form/common-login-form";

@Component({
  selector: "app-simple-login",
  templateUrl: "./simple-login.html",
  styleUrls: ["./simple-login.scss"],
  imports: [RouterLink, CommonLoginForm],
})
export class SimpleLogin {}
