import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BecomeMembers } from "../../../../shared/data/main-ecommerce/pricing";

@Component({
  selector: "app-become-member",
  templateUrl: "./become-member.html",
  styleUrls: ["./become-member.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class BecomeMember {
  public becomememberData = BecomeMembers;
}
