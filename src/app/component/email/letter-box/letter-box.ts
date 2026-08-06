import { Component, ChangeDetectionStrategy } from "@angular/core";

import { LetterboxSidebar } from "./letterbox-sidebar/letterbox-sidebar";

@Component({
  selector: "app-letter-box",
  templateUrl: "./letter-box.html",
  styleUrls: ["./letter-box.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [LetterboxSidebar],
})
export class LetterBox {}
