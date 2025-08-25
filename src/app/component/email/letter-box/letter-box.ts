import { Component } from "@angular/core";

import { LetterboxSidebar } from "./letterbox-sidebar/letterbox-sidebar";

@Component({
  selector: "app-letter-box",
  templateUrl: "./letter-box.html",
  styleUrls: ["./letter-box.scss"],
  imports: [LetterboxSidebar],
})
export class LetterBox {}
