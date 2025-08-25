import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.html",
  styleUrls: ["./forget-password.scss"],
  imports: [RouterLink, FormsModule],
})
export class ForgetPassword {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
