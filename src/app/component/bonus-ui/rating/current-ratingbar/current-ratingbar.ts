import { Component, inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import {
  FaIconLibrary,
  FaIconComponent,
} from "@fortawesome/angular-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar,
  faStarHalfAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-current-ratingbar",
  templateUrl: "./current-ratingbar.html",
  styleUrls: ["./current-ratingbar.scss"],
  imports: [BarRatingModule, FaIconComponent],
})
export class CurrentRatingbar {
  faoRate = 5.6;
  faoRated = false;

  constructor() {
    const library = inject(FaIconLibrary);

    library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }

  onFaoRate(e: number) {
    this.faoRated = true;
    this.faoRate = e;
  }
  ctrl = new FormControl<number | null>(null, Validators.required);

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
}
