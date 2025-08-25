import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonRegisterForm } from "../common-register-form/common-register-form";

@Component({
  selector: "app-register-with-bg-img",
  templateUrl: "./register-with-bg-img.html",
  styleUrls: ["./register-with-bg-img.scss"],
  imports: [RouterLink, CommonRegisterForm],
})
export class RegisterWithBgImg {}
