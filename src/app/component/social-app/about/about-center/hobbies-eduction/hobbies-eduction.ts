import { Component, input } from "@angular/core";

import { hobbiesEduction } from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-hobbies-eduction",
  templateUrl: "./hobbies-eduction.html",
  styleUrls: ["./hobbies-eduction.scss"],
  imports: [],
})
export class HobbiesEduction {
  readonly data = input<hobbiesEduction>();
}
