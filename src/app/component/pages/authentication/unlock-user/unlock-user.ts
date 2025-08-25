import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-unlock-user",
  templateUrl: "./unlock-user.html",
  styleUrls: ["./unlock-user.scss"],
  imports: [RouterLink, FormsModule],
})
export class UnlockUser {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
