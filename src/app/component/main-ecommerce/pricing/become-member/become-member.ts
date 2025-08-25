import { Component } from "@angular/core";

import { BecomeMembers } from "../../../../shared/data/main-ecommerce/pricing";

@Component({
  selector: "app-become-member",
  templateUrl: "./become-member.html",
  styleUrls: ["./become-member.scss"],
  imports: [],
})
export class BecomeMember {
  public becomememberData = BecomeMembers;
}
