import { Component, ChangeDetectionStrategy } from "@angular/core";

import { userCard } from "../../../shared/data/user/users-card";

@Component({
  selector: "app-user-cards",
  templateUrl: "./user-cards.html",
  styleUrls: ["./user-cards.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class UserCards {
  public users = userCard;
}
