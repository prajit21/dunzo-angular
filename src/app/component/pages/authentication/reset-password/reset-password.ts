import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.html",
  styleUrls: ["./reset-password.scss"],
  imports: [RouterLink, FormsModule],
})
export class ResetPassword {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
