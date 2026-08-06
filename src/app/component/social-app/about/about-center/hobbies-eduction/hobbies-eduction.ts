import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { hobbiesEduction } from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-hobbies-eduction",
  templateUrl: "./hobbies-eduction.html",
  styleUrls: ["./hobbies-eduction.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class HobbiesEduction {
  readonly data = input<hobbiesEduction>();
}
