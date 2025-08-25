import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CommonRegisterForm } from "../common-register-form/common-register-form";

@Component({
  selector: "app-register-bg-img-two",
  templateUrl: "./register-bg-img-two.html",
  styleUrls: ["./register-bg-img-two.scss"],
  imports: [RouterLink, CommonRegisterForm],
})
export class RegisterBgImgTwo {}
