import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-browser-defaults",
  templateUrl: "./browser-defaults.html",
  styleUrls: ["./browser-defaults.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class BrowserDefaults {}
