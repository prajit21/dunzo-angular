import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

import { Feathericon } from "../../feathericon/feathericon";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.html",
  styleUrls: ["./profile.scss"],
  imports: [RouterLink, Feathericon],
})
export class Profile {
  private router = inject(Router);

  logOut() {
    localStorage.clear();
    this.router.navigate(["/auth/login"]);
  }
}
