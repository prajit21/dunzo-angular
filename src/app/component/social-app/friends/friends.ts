import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import * as data from "../../../shared/data/user/users-card";

@Component({
  selector: "app-friends",
  templateUrl: "./friends.html",
  styleUrls: ["./friends.scss"],
  imports: [RouterLink],
})
export class Friends {
  public friendsData = data.userCard;
}
