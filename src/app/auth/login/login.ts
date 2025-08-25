import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

import { Feathericon } from "../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
  imports: [RouterLink, FormsModule, ReactiveFormsModule, Feathericon],
})
export class Login {
  private fb = inject(FormBuilder);
  router = inject(Router);

  public show: boolean = false;
  public loginForm: FormGroup;

  constructor() {
    const router = this.router;

    const userData = localStorage.getItem("user");
    if (userData?.length != null) {
      router.navigate(["/dashboard/default"]);
    }

    this.loginForm = this.fb.group({
      email: ["Test@gmail.com", [Validators.required, Validators.email]],
      password: ["test123", Validators.required],
    });
  }
  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    if (
      this.loginForm.value["email"] == "Test@gmail.com" &&
      this.loginForm.value["password"] == "test123"
    ) {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };

      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/dashboard/default"]);
    }
  }
}
