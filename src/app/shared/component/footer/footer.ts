import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.html",
  styleUrls: ["./footer.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Footer {
  public year = new Date().getFullYear();
}
