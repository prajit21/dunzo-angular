import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { addFriends } from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-common-add-friends",
  templateUrl: "./common-add-friends.html",
  styleUrls: ["./common-add-friends.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CommonAddFriends {
  readonly data = input<addFriends>();
}
